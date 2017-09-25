import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import NavItem from './nav-item-large'
import Dropdown from '../../shared/dropdown'
import DropdownItem from '../../shared/dropdown-item'
import * as userActions from '../../../actions/user-actions'
import { userCircle } from 'react-icons-kit/fa/userCircle'
import { gears } from 'react-icons-kit/fa/gears'
import { question } from 'react-icons-kit/fa/question'
import { signOut } from 'react-icons-kit/fa/signOut'
import './nav-large.less'

class NavLarge extends React.Component {
	handleDropDownClick = e => {
		e.preventDefault()
	}
	handleLogout = e => {
		this.props.actions.userLogout()
		this.props.history.push('/')
	}
	render() {
		const user = this.props.user
		const userName = user.displayName || user.email
		const guestMenu = (
			<div>
				<NavItem
					linkTo="/login"
					value="Login"
					active={this.props.active === 'login'}
					align="right"
				/>
				<NavItem
					linkTo="/sign-up"
					value="Sign Up"
					active={this.props.active === 'sign-up'}
					align="right"
				/>
				<NavItem
					linkTo="/help"
					value="Help"
					active={this.props.active === 'help'}
					align="right"
				/>
			</div>
		)
		const userMenu = (
			<div className="nav-item-large nav-item-right">
				<Dropdown value={userName}>
					<DropdownItem
						value="Edit Profile"
						linkTo="/profile"
						active={this.props.active === 'profile'}
						align="left"
					>
						<Icon icon={userCircle} />
					</DropdownItem>
					<DropdownItem
						value="Settings"
						linkTo="/account"
						active={this.props.active === 'account'}
						align="left"
					>
						<Icon icon={gears} />
					</DropdownItem>
					<hr />
					<DropdownItem
						value="Help"
						linkTo="/help"
						active={this.props.active === 'help'}
						align="left"
					>
						<Icon icon={question} />
					</DropdownItem>
					<hr />
					<DropdownItem value="Logout" align="left" onClick={this.handleLogout}>
						<Icon icon={signOut} />
					</DropdownItem>
				</Dropdown>
			</div>
		)

		return (
			<div className="nav-bar nav-large">
				<NavItem linkTo="/" value="Home" active={this.props.active === ''} />
				<NavItem linkTo="/about" value="About" active={this.props.active === 'about'} />
				{this.props.user.authenticated ? userMenu : guestMenu}
			</div>
		)
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavLarge))
