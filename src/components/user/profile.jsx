import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AvatarEditor from 'react-avatar-editor'
import { userCircle } from 'react-icons-kit/fa/userCircle'
import * as userActions from '../../actions/user-actions'
import * as globalActions from '../../actions/global-actions'
import FlexContainer from '../shared/flex-container'
import Button from '../shared/button'
import Input from '../shared/input'
import Slider from '../shared/slider'
import './profile.less'

class Profile extends React.Component {
	state = {
		profilePicture: undefined,
		pictureScale: 1
	}
	componentDidMount() {
		document.title = 'Profile'
		this.handleUploadListener()
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
		try {
			if (this.editor) {
				this.props.globalActions.loadingStateChange(true)
				const canvas = this.editor.getImage()
				canvas.toBlob(blob => {
					const storageRef = firebase
						.storage()
						.ref(
							`/profile_pictures/${this.props.user.data.uid}/${this.state
								.profilePicture.name}`
						)
					const task = storageRef.put(blob)
					task.on(
						'state_changed',
						snapshot => {
							// can use this if a progress bad is needed
						},
						err => {
							throw err
						},
						async () => {
							// photo successfully uploaded
							const photoURL = await storageRef.getDownloadURL()
							await this.props.userActions.saveUserProfilePicture(photoURL)
							await this.props.userActions.checkForUser()
							this.setState({
								profilePicture: undefined,
								pictureScale: 1
							})
							this.props.globalActions.loadingStateChange(false)
						}
					)
				})
			}
		} catch (ex) {
			this.props.globalActions.loadingStateChange(false)
		}
	}
	handlePictureScale = e => {
		const pictureScale = parseFloat(e.target.value)
		this.setState({
			pictureScale
		})
	}
	setEditorRef = editor => (this.editor = editor)
	render() {
		const user = this.props.user.data
		const userName = user.displayName || user.email
		return (
			<FlexContainer>
				<h1 size="large">{userName || 'Profile'}</h1>
				<h4>Profile Photo</h4>
				<div>
					{(this.state.profilePicture || user.photoURL) && (
							<div>
								<div className="avatar-flex-container">
									<AvatarEditor
										ref={this.setEditorRef}
										border={5}
										width={300}
										height={300}
										borderRadius={999}
										color={[255, 255, 255, 0.6]}
										scale={this.state.pictureScale}
										image={this.state.profilePicture || user.photoURL}
									/>
								</div>
								<Slider
									min="1"
									max="2"
									step=".01"
									value={this.state.pictureScale}
									onChange={this.handlePictureScale}
								/>
							</div>
						)}
					{this.state.profilePicture ? (
						<Button onClick={this.handleSaveClick}>Save your photo</Button>
					) : (
						<Button onClick={this.handleUploadClick}>Upload a Photo</Button>
					)}

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
