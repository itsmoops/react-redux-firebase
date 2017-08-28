import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/user-actions'
import {Link} from 'react-router-dom'
import {Menu, Icon, Dropdown} from 'semantic-ui-react'

class MenuLarge extends React.Component {
    handleDropDownClick = (e) => {
        e.preventDefault()
    }
    handleLogout = (e) => {
        this.props.actions.userLogout()
    }
    render() {
        const user = this.props.user
        const userName = user.displayName || user.email
        const userMenu = <Menu.Menu>
                <Menu.Item>
                <Dropdown pointing text={userName} onClick={this.handleDropDownClick}>
                    <Dropdown.Menu>
                        <Dropdown.Item icon='user circle' text='Edit Profile'/>
                        <Dropdown.Item icon='setting' text='Setting'/>
                        <Dropdown.Divider/>
                        <Dropdown.Item icon='log out' text='Logout' onClick={this.handleLogout} as={Link} to='/'/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </Menu.Menu>

    const guestMenu = <Menu.Menu>
            <Menu.Item name='help' active={this.props.activeItem === 'help'} as={Link} to='/help' onClick={this.handleItemClick}>
                Help
            </Menu.Item>
            <Menu.Item name='signup' active={this.props.activeItem === 'sign-up'} as={Link} to='/sign-up' onClick={this.handleItemClick}>
                Sign Up
            </Menu.Item>
            <Menu.Item name='login' active={this.props.activeItem === 'login'} as={Link} to='/login' onClick={this.handleItemClick}>
                Log In
            </Menu.Item>
        </Menu.Menu>

        return (
            <Menu pointing secondary stackable className='nav-bar'>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenuLarge)
