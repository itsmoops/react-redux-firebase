import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AvatarEditor from 'react-avatar-editor'
import styled from 'styled-components'
import { userCircle } from 'react-icons-kit/fa/userCircle'
import { rotateRight } from 'react-icons-kit/fa/rotateRight'
import * as userActions from '../../actions/user-actions'
import * as globalActions from '../../actions/global-actions'
import FlexContainer from '../shared/flex-container'
import Button from '../shared/button'
import Input from '../shared/input'
import Slider from '../shared/slider'
import Message from '../shared/message'

const StyledDiv = styled.div`
	display: flex;
	display: -webkit-flex;
	align-items: center;
	-webkit-align-items: center;
	justify-content: center;
	-webkit-justify-content: center;
	padding: 20 0 20 0;
	&:hover {
		cursor: move;
	}
`

const StyledIconContainer = styled.div`
	position: absolute;
	cursor: pointer;
	padding: 10px;
	margin-top: 125px;
	margin-left: 125px;
`

class Profile extends React.Component {
	state = {
		profilePicture: undefined,
		pictureScale: 1,
		rotation: 0
	}
	componentDidMount() {
		document.title = 'Profile'
		this.handleUploadListener()
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.user) {
			if (!nextProps.user.data.authenticated) {
				this.props.history.push('/')
			}
			this.setState({
				currentPicture: nextProps.user.photoURL
			})
		}
	}
	handleUploadListener = () => {
		document.getElementById('upload').addEventListener('change', e => {
			const file = e.target.files[0]
			this.setState({
				profilePicture: file
			})
		})
	}
	handleUploadClick = () => {
		document.getElementById('upload').click()
	}
	handleSaveClick = () => {
		if (this.editor) {
			this.props.globalActions.loadingStateChange(true)
			const canvas = this.editor.getImage()
			canvas.toBlob(blob => {
				const uniqueId = this.props.user.data.uid
				const photoName = this.state.profilePicture.name
				const storageRef = firebase
					.storage()
					.ref(`/profile_pictures/${uniqueId}/${photoName}`)
				const task = storageRef.put(blob)
				task.on(
					'state_changed',
					snapshot => {
						// can use this if a progress bar is needed
					},
					err => {
						this.setState({
							errorMessage: err.message
						})
						this.props.globalActions.loadingStateChange(false)
					},
					async () => {
						// photo successfully uploaded
						const photoURL = await storageRef.getDownloadURL()
						await this.props.userActions.saveUserProfilePicture(photoURL)
						await this.props.userActions.checkForUser()
						this.setState({
							profilePicture: undefined,
							pictureScale: 1,
							errorMessage: undefined
						})
						this.props.globalActions.loadingStateChange(false)
					}
				)
			})
		}
	}
	handleDiscardClick = () => {
		this.setState({
			profilePicture: this.state.previousPicture,
			pictureScale: 1,
			rotation: 0
		})
	}
	handlePictureScale = e => {
		const pictureScale = parseFloat(e.target.value)
		this.setState({
			pictureScale
		})
	}
	handlePictureRotate = () => {
		const currentRotation = this.state.rotation
		switch (currentRotation) {
			case 0:
				this.setState({
					rotation: 90
				})
				break
			case 90:
				this.setState({
					rotation: 180
				})
				break
			case 180:
				this.setState({
					rotation: 270
				})
				break
			case 270:
				this.setState({
					rotation: 0
				})
				break
		}
	}
	setEditorRef = editor => (this.editor = editor)
	render() {
		const user = this.props.user.data
		const userName = user.displayName || user.email
		return (
			<FlexContainer>
				<h1>{userName || 'Profile'}</h1>
				<h2>Profile Photo</h2>
				<div>
					{(this.state.profilePicture || user.photoURL) && (
						<div>
							<StyledDiv>
								<AvatarEditor
									ref={this.setEditorRef}
									border={5}
									width={300}
									height={300}
									rotate={this.state.rotation}
									borderRadius={999}
									color={[255, 255, 255, 0.6]}
									scale={this.state.pictureScale}
									image={this.state.profilePicture || user.photoURL}
								/>
								<StyledIconContainer onClick={this.handlePictureRotate}>
									<Icon icon={rotateRight} size={30} />
								</StyledIconContainer>
							</StyledDiv>
							<Slider
								min="1"
								max="2"
								step=".01"
								value={this.state.pictureScale}
								disabled={!this.state.profilePicture}
								onChange={this.handlePictureScale}
							/>
						</div>
					)}
					{this.state.profilePicture ? (
						<div>
							<Button onClick={this.handleDiscardClick} width="46%" align="left">
								Discard
							</Button>
							<Button onClick={this.handleSaveClick} width="46%" align="right">
								Save
							</Button>
						</div>
					) : (
						<Button onClick={this.handleUploadClick}>Upload a Photo</Button>
					)}
					{this.state.errorMessage && <Message>{this.state.errorMessage}</Message>}
					<Input id="upload" type="file" hidden />
				</div>
			</FlexContainer>
		)
	}
}

function mapStateToProps(state) {
	return { user: state.user }
}

function mapDispatchToProps(dispatch) {
	return {
		userActions: bindActionCreators(userActions, dispatch),
		globalActions: bindActionCreators(globalActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
