import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NavItem from './nav-item-large'
import Dropdown from '../../shared/dropdown'
import * as userActions from '../../../actions/user-actions'
import './nav-large.less'

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
			<NavItem align="right">
				<Dropdown />
			</NavItem>
		)

		return (
			<div className="nav-bar nav-large">
				<NavItem linkTo="/" value="Home" active={this.props.active === ''} />
				<NavItem linkTo="/about" value="About" active={this.props.active === 'about'} />
				{userMenu}
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

export default connect(mapStateToProps, mapDispatchToProps)(NavLarge)
