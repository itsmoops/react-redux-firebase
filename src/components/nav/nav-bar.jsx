import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as globalActions from '../../actions/global-actions'
import * as userActions from '../../actions/user-actions'
import { isSmallDevice } from '../../utilities/utilities'
import NavLarge from './nav-large/nav-large'
// import MenuSmall from './menu-small'

class NavBar extends React.Component {
	state = {
		smallMenu: isSmallDevice()
	}
	componentDidMount() {
		this.props.userActions.checkForUser()
		window.addEventListener('resize', this.updateWidth)
	}
	updateWidth = () => {
		this.setState({ smallMenu: isSmallDevice() })
	}
	render() {
		const activeRoute = this.props.location.pathname.replace('/', '')
		return (
			<div>
				<NavLarge active={activeRoute || ''} />
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return { user: state.user }
}

function mapDispatchToProps(dispatch) {
	return {
		globalActions: bindActionCreators(globalActions, dispatch),
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
