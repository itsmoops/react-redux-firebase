import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/user-actions'
import {Link} from 'react-router-dom'
import {Menu, Icon, Dropdown} from 'semantic-ui-react'

class MenuSmall extends React.Component {
    handleDropDownClick = (e) => {
        e.preventDefault()
    }
    handleLogout = (e) => {
        this.props.actions.userLogout()
    }
    render() {
        const user = this.props.user
        const userName = user.displayName || user.email
        const userMenu = <div>
            <hr/>
            <Menu.Item name='profile' active={this.props.activeItem === 'profile'} as={Link} to='/profile' onClick={this.handleItemClick}>
                Edit Profile
                <Icon size='large' name='user circle' />
            </Menu.Item>
            <Menu.Item name='account-settings' active={this.props.activeItem === 'account-settings'} as={Link} to='/account-settings' onClick={this.handleItemClick}>
                Account Settings
                <Icon size='large' name='setting' />
            </Menu.Item>
            <Menu.Item name='logout' active={this.props.activeItem === 'logout'} as={Link} to='/' onClick={this.handleLogout}>
                Logout
                <Icon size='large' name='log out' />
            </Menu.Item>
        </div>

        const guestMenu = <div>
            <hr/>
            <Menu.Item name='help' active={this.props.activeItem === 'help'} as={Link} to='/help' onClick={this.handleItemClick}>
                Help
            </Menu.Item>
            <Menu.Item name='signup' active={this.props.activeItem === 'sign-up'} as={Link} to='/sign-up' onClick={this.handleItemClick}>
                Sign Up
            </Menu.Item>
            <Menu.Item name='login' active={this.props.activeItem === 'login'} as={Link} to='/login' onClick={this.handleItemClick}>
                Log In
            </Menu.Item>
        </div>

        return (
            <Menu pointing secondary vertical className='nav-bar menu-small'>
                <Menu.Item name='home' active={this.props.activeItem === ''} as={Link} to='/' onClick={this.handleItemClick}>
                    Home
                </Menu.Item>
                <Menu.Item name='about' active={this.props.activeItem === 'about'} as={Link} to='/about' onClick={this.handleItemClick}>
                    About
                </Menu.Item>
                <Menu.Menu position='right'/>
                {this.props.user.authenticated ? userMenu : guestMenu}
            </Menu>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {user: state.user}
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuSmall)
