import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavItem from './nav-item-small'
import * as userActions from '../../../actions/user-actions'
import { thinDown } from 'react-icons-kit/entypo/thinDown'
import './nav-small.less'

class NavSmall extends React.Component {
	state = {
		menuOpen: undefined
	}
	handleIconClick = () => {
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}
	handleLogout = () => {
		this.props.actions.userLogout()
		this.handleItemClick()
	}
	handleItemClick = linkTo => {
		this.setState({ menuOpen: false })
	}
	render() {
		let iconClasses = ''
		let menuClasses = ''
		if (this.state.menuOpen !== undefined) {
			// apply menu animation classes
			iconClasses = this.state.menuOpen ? 'nav-bar-icon-up' : 'nav-bar-icon-down'
			menuClasses = this.state.menuOpen ? 'menu-small-down' : 'menu-small-up'
		}

		const user = this.props.user
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
					value="Profile"
					active={this.props.active === 'profile'}
					onClick={this.handleItemClick}
				/>
				<NavItem
					linkTo="/account"
					value="Account Settings"
					active={this.props.active === 'account'}
					onClick={this.handleItemClick}
				/>
				<NavItem value="Logout" onClick={this.handleLogout} />
			</div>
		)

		return (
			<div>
				<div className="nav-bar">
					<button className="chevron">
						<Icon
							className={iconClasses}
							icon={thinDown}
							onClick={this.handleIconClick}
						/>
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
					{this.props.user.authenticated ? userMenu : guestMenu}
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
	return { user: state.user }
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(userActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavSmall)
