import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavItem from './nav-item-small'
import * as globalActions from '../../../actions/global-actions'
import * as userActions from '../../../actions/user-actions'
import { thinDown } from 'react-icons-kit/entypo/thinDown'
import { userCircle } from 'react-icons-kit/fa/userCircle'
import { gear } from 'react-icons-kit/fa/gear'
import { signOut } from 'react-icons-kit/fa/signOut'
import './nav-small.less'

class NavSmall extends React.Component {
	handleIconClick = () => {
		this.props.globalActions.toggleMenuDropdown(!this.props.global.menuOpen)
	}
	handleItemClick = () => {
		this.props.globalActions.toggleMenuDropdown(!this.props.global.menuOpen)
	}
	handleLogout = () => {
		this.props.userActions.userLogout()
		this.handleItemClick()
	}
	render() {
		let iconClasses = ''
		let menuClasses = ''
		if (this.props.global.menuOpen !== undefined) {
			// apply menu animation classes
			iconClasses = this.props.global.menuOpen ? 'nav-bar-icon-up' : 'nav-bar-icon-down'
			menuClasses = this.props.global.menuOpen ? 'menu-small-down' : 'menu-small-up'
		}

		const user = this.props.user.data
		const userName = user.displayName || user.email

		const guestMenu = (
			<div>
				<NavItem
					linkTo="/sign-up"
					value="Sign Up"
					active={this.props.active === 'sign-up'}
					onClick={this.handleItemClick}
				/>
				<NavItem
					linkTo="/login"
					value="Login"
					active={this.props.active === 'login'}
					onClick={this.handleItemClick}
				/>
			</div>
		)
		const userMenu = (
			<div>
				<NavItem
					linkTo="/profile"
					value="Edit Profile"
					active={this.props.active === 'profile'}
					icon={userCircle}
					onClick={this.handleItemClick}
				/>
				<NavItem
					linkTo="/account"
					value="Account Settings"
					active={this.props.active === 'account'}
					icon={gear}
					onClick={this.handleItemClick}
				/>
				<NavItem value="Logout" icon={signOut} onClick={this.handleLogout} />
			</div>
		)

		return (
			<div>
				<div className="nav-bar">
					<button className="chevron" onClick={this.handleIconClick}>
						<Icon className={iconClasses} icon={thinDown} />
					</button>
				</div>
				<div className={`menu-small ${menuClasses}`}>
					<NavItem
						linkTo="/"
						value="Home"
						active={this.props.active === ''}
						onClick={this.handleItemClick}
					/>
					<NavItem
						linkTo="/about"
						value="About"
						active={this.props.active === 'about'}
						onClick={this.handleItemClick}
					/>
					<hr />
					{ user.authenticated ? userMenu : guestMenu }
					<hr />
					<NavItem
						linkTo="/help"
						value="Help"
						active={this.props.active === 'help'}
						onClick={this.handleItemClick}
					/>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state, ownProps) {
	return {
		global: state.global,
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		globalActions: bindActionCreators(globalActions, dispatch),
		userActions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSmall)
