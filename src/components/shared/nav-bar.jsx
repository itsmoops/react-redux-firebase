import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import './nav-bar.less'

class NavBar extends React.Component {
    render() {
        const activeItem = this.props.location.pathname.replace("/", "")
        return (
            <Menu attached="top" pointing secondary stackable className="nav-bar">
                <Menu.Item name='home' active={activeItem === ''} as={Link} to="/">
                    Home
                </Menu.Item>
                <Menu.Item name='about' active={activeItem === 'about'} as={Link} to="/about">
                    About
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='help' active={activeItem === 'help'} as={Link} to="/help">
                        Help
                    </Menu.Item>
                    <Menu.Item name='signup' active={activeItem === 'sign-up'} as={Link} to="/sign-up">
                        Sign Up
                    </Menu.Item>
                    <Menu.Item name='login' active={activeItem === 'login'} as={Link} to="/login">
                        Log In
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default NavBar
