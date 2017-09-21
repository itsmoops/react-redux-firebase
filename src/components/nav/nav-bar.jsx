import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as globalActions from '../../actions/global-actions'
import * as userActions from '../../actions/user-actions'
import { isSmallDevice } from '../../utilities/utilities'
import NavLarge from './nav-large/nav-large'
import NavSmall from './nav-small/nav-small'
import './nav-bar.less'

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
		const activeRoute = this.props.location.pathname.replace('/', '') || ''
		return this.state.smallMenu ? (
			<NavSmall active={activeRoute} />
		) : (
			<NavLarge active={activeRoute} />
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
