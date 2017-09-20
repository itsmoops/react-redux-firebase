import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import NavItem from './nav-item'
import * as userActions from '../../actions/user-actions'

class MenuLarge extends React.Component {
	handleDropDownClick = e => {
		e.preventDefault()
	}
	handleLogout = e => {
		this.props.actions.userLogout()
	}
	render() {
		const user = this.props.user
		const userName = user.displayName || user.email
		const guestMenu = (
			<div className="nav-bar">
				<NavItem active linkTo="/">
					Home
				</NavItem>
				<NavItem linkTo="/about">About</NavItem>
				<NavItem linkTo="/login" align="right">
					Login
				</NavItem>
				<NavItem linkTo="/sign-up" align="right">
					Sign Up
				</NavItem>
				<NavItem linkTo="/help" align="right">
					Help
				</NavItem>
			</div>
		)
		const userMenu = <div />

		return guestMenu
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuLarge)
