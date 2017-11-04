import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'
import NavItem from './nav-item-large'
import Dropdown from '../../shared/dropdown'
import DropdownItem from '../../shared/dropdown-item'
import * as userActions from '../../../actions/user-actions'
import { userCircle } from 'react-icons-kit/fa/userCircle'
import { gear } from 'react-icons-kit/fa/gear'
import { question } from 'react-icons-kit/fa/question'
import { signOut } from 'react-icons-kit/fa/signOut'
import './nav-large.less'

class NavLarge extends React.Component {
	handleLogout = () => {
		this.props.actions.userLogout()
		this.props.history.push('/')
	}
	render() {
		const user = this.props.user.data
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
						icon={userCircle}
					/>
					<DropdownItem
						value="Settings"
						linkTo="/account"
						active={this.props.active === 'account'}
						align="left"
						icon={gear}
					/>
					<DropdownItem
						value="Help"
						linkTo="/help"
						active={this.props.active === 'help'}
						align="left"
						icon={question}
					/>
					<DropdownItem
						value="Logout"
						align="left"
						onClick={this.handleLogout}
						icon={signOut}
					/>
				</Dropdown>
			</div>
		)

		return (
			<div className="nav-bar nav-large">
				<NavItem linkTo="/" value="Home" active={this.props.active === ''} />
				<NavItem linkTo="/about" value="About" active={this.props.active === 'about'} />
				{user.authenticated ? userMenu : guestMenu}
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
