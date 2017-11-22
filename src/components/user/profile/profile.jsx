import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { Box } from 'grid-styled'
import { userCircle } from 'react-icons-kit/fa/userCircle'
import { rotateRight } from 'react-icons-kit/fa/rotateRight'
import * as userActions from '../../../actions/user-actions'
import * as globalActions from '../../../actions/global-actions'
import Flex from '../../shared/flex'
import Menu from '../../shared/menu'
import ProfileContentEditor from './profile-content-editor'
import ProfilePhotoEditor from './profile-photo-editor'

class Profile extends React.Component {
	state = {
		activeState: 'Profile'
	}
	componentWillMount() {
		document.title = 'Profile'
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.user) {
			if (!nextProps.user.authenticated) {
				this.props.history.push('/')
			}
		}
	}
	handleMenuItemClick = e => {
		const item = e.target.innerText
		this.setState({
			activeState: item
		})
	}
	render() {
		let ActiveState
		switch (this.state.activeState) {
			case 'Profile':
				ActiveState = ProfileContentEditor
				break
			case 'Photo':
				ActiveState = ProfilePhotoEditor
				break
			default:
				ActiveState = ProfileContentEditor
				break
		}
		return (
			<Flex>
				<Box w={[1, 2/3, 1/2, 1/3]} px={20} m="auto">
					<Menu.Menu>
						<Menu.Item
							onClick={this.handleMenuItemClick}
							active={this.state.activeState === 'Profile'}
						>
							Profile
						</Menu.Item>
						<Menu.Item
							onClick={this.handleMenuItemClick}
							active={this.state.activeState === 'Photo'}
						>
							Photo
						</Menu.Item>
					</Menu.Menu>
					{<ActiveState />}
				</Box>
			</Flex>
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
