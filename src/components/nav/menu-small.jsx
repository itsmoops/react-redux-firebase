import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/user-actions'
import { Link } from 'react-router-dom'
import './nav-bar.less'

class MenuSmall extends React.Component {
	state = {
		menuOpen: undefined
	}
	handleIconClick = e => {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}
	handleItemClick = e => {
		this.setState({ menuOpen: false })
	}
	handleLogout = e => {
		this.props.actions.userLogout()
		this.handleItemClick()
	}
	render() {
		let iconClass = ''
		let menuClass = ''
		if (this.state.menuOpen !== undefined) {
			// apply menu animation classes
			iconClass = this.state.menuOpen ? 'nav-bar-icon-up' : 'nav-bar-icon-down'
			menuClass = this.state.menuOpen ? 'menu-small-down' : 'menu-small-up'
		}
		const user = this.props.user
		const userName = user.displayName || user.email
		const guestMenu = <div />
		const userMenu = <div />

		return <div />
	}
}

function mapStateToProps(state, ownProps) {
	return { user: state.user }
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSmall)
