import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as userActions from '../../actions/user-actions'
import {Link} from 'react-router-dom'
import {Menu, Icon, Dropdown} from 'semantic-ui-react'

class UserMenu extends React.Component {
    handleDropDownClick = (e) => {
        e.preventDefault()
    }
    handleLogout = (e) => {
        this.props.actions.userLogout()
    }
    render() {
        const user = this.props.user
        const userName = user.displayName || user.email
        return (
            <Menu pointing secondary stackable className='nav-bar'>
                <Menu.Item name='home' active={this.props.activeItem === ''} as={Link} to='/' onClick={this.handleItemClick}>
                    Home
                </Menu.Item>
                <Menu.Item name='about' active={this.props.activeItem === 'about'} as={Link} to='/about' onClick={this.handleItemClick}>
                    About
                </Menu.Item>
                <Menu.Menu position='right'/>
                <Menu.Item>
                    <Dropdown pointing text={userName} onClick={this.handleDropDownClick}>
                        <Dropdown.Menu>
                            <Dropdown.Header>Settings</Dropdown.Header>
                            <Dropdown.Item>Profile</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item>
                                <Link to='/' onClick={this.handleLogout}>Logout</Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
