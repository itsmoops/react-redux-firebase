import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavItem from './nav-item-small'
import * as userActions from '../../../actions/user-actions'
import { chevronDown } from 'react-icons-kit/fa/chevronDown'
import './nav-small.less'

class NavSmall extends React.Component {
	state = {
		menuOpen: undefined
	}
	handleIconClick = () => {
		debugger
		this.setState({
			menuOpen: !this.state.menuOpen
		})
	}
	handleItemClick = () => {
		this.setState({ menuOpen: false })
	}
	handleLogout = () => {
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

		const guestMenu = (
			<div>
				<div className="nav-bar">
					<button className="chevron">
						<Icon
							className={iconClass}
							icon={chevronDown}
							onClick={this.handleIconClick}
						/>
					</button>
				</div>
				<div className={`menu-small ${menuClass}`}>
					<NavItem
						linkTo="/"
						active={this.props.active === ''}
						onClick={this.handleItemClick}
					>
						Home
					</NavItem>
					<NavItem
						linkTo="/about"
						active={this.props.active === 'about'}
						onClick={this.handleItemClick}
					>
						About
					</NavItem>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavSmall)
