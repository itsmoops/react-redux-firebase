import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import NavItem from './nav-item'
import * as userActions from '../../../actions/user-actions'

class NavLarge extends React.Component {
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
				<NavItem linkTo="/" active={this.props.active === ''}>
					Home
				</NavItem>
				<NavItem linkTo="/about" active={this.props.active === 'about'}>About</NavItem>
				<NavItem linkTo="/login" active={this.props.active === 'login'} align="right">
					Login
				</NavItem>
				<NavItem linkTo="/sign-up" active={this.props.active === 'sign-up'} align="right">
					Sign Up
				</NavItem>
				<NavItem linkTo="/help" active={this.props.active === 'help'} align="right">
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

export default connect(mapStateToProps, mapDispatchToProps)(NavLarge)
