import {Link} from "react-router-dom"
import {Button, Container, Menu, Icon} from "semantic-ui-react"
import CollapsibleNav from './collapsible-nav'

class NavBar extends React.Component {
    render() {
        const activeItem = this.props.location.pathname.replace("/", "")

        return (
            <CollapsibleNav>
                <Menu attached="top" pointing secondary stackable className="nav-bar">
                    <Menu.Item name="home" active={activeItem === ""} as={Link} to="/" onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>
                    <Menu.Item name="about" active={activeItem === "about"} as={Link} to="/about" onClick={this.handleItemClick}>
                        About
                    </Menu.Item>
                    <Menu.Menu position="right"/>
                    <Menu.Item name="help" active={activeItem === "help"} as={Link} to="/help" onClick={this.handleItemClick}>
                        Help
                    </Menu.Item>
                    <Menu.Item name="signup" active={activeItem === "sign-up"} as={Link} to="/sign-up" onClick={this.handleItemClick}>
                        Sign Up
                    </Menu.Item>
                    <Menu.Item name="login" active={activeItem === "login"} as={Link} to="/login" onClick={this.handleItemClick}>
                        Log In
                    </Menu.Item>
                </Menu>
            </CollapsibleNav>
        )
    }
}

export default NavBar
