import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/user-actions'
import {Link} from 'react-router-dom'
import {Menu, Icon, Dropdown, Button} from 'semantic-ui-react'
import './nav-bar.less'

class MenuSmall extends React.Component {
    state = {
        menuOpen: false
    }
    handleIconClick = (event) => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }
    handleItemClick = (event) => {
        this.setState({menuOpen: false})
    }
    handleLogout = (e) => {
        this.props.actions.userLogout()
        this.handleItemClick()
    }
    render() {
        const user = this.props.user
        const userName = user.displayName || user.email
        const userMenu = <div>
            <hr/>
            <Menu.Item name='profile' active={this.props.activeItem === 'profile'} as={Link} to='/profile' onClick={this.handleItemClick}>
                Edit Profile
                <Icon size='large' name='user circle'/>
            </Menu.Item>
            <Menu.Item name='account' active={this.props.activeItem === 'account'} as={Link} to='/account' onClick={this.handleItemClick}>
                Account Settings
                <Icon size='large' name='setting'/>
            </Menu.Item>
            <Menu.Item name='logout' active={this.props.activeItem === 'logout'} as={Link} to='/' onClick={this.handleLogout}>
                Logout
                <Icon size='large' name='log out'/>
            </Menu.Item>
            <hr/>
            <Menu.Item name='help' active={this.props.activeItem === 'help'} as={Link} to='/help' onClick={this.handleItemClick}>
                Help
            </Menu.Item>
        </div>

        const guestMenu = <div>
            <hr/>
            <Menu.Item name='signup' active={this.props.activeItem === 'sign-up'} as={Link} to='/sign-up' onClick={this.handleItemClick}>
                Sign Up
            </Menu.Item>
            <Menu.Item name='login' active={this.props.activeItem === 'login'} as={Link} to='/login' onClick={this.handleItemClick}>
                Log In
            </Menu.Item>
            <hr/>
            <Menu.Item name='help' active={this.props.activeItem === 'help'} as={Link} to='/help' onClick={this.handleItemClick}>
                Help
            </Menu.Item>
        </div>

        return (
            <div className='nav-bar'>
                <Button basic icon onClick={this.handleIconClick}>
                    <Icon flipped={!this.state.menuOpen
                        ? 'vertically'
                        : 'horizontally'} size='large' name='chevron up'/>
                </Button>
                {this.state.menuOpen && <Menu pointing secondary vertical size='massive' className='nav-bar menu-small'>
                    <Menu.Item name='home' active={this.props.activeItem === ''} as={Link} to='/' onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>
                    <Menu.Item name='about' active={this.props.activeItem === 'about'} as={Link} to='/about' onClick={this.handleItemClick}>
                        About
                    </Menu.Item>
                    <Menu.Menu position='right'/> {this.props.user.authenticated
                        ? userMenu
                        : guestMenu}
                </Menu>}
            </div>
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
