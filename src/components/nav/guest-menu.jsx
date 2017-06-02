import {Link} from "react-router-dom"
import {Menu, Icon} from "semantic-ui-react"

class GuestMenu extends React.Component {
    render() {
        return (
            <Menu pointing secondary stackable className="nav-bar">
                <Menu.Item name="home" active={this.props.activeItem === ""} as={Link} to="/" onClick={this.handleItemClick}>
                    Home
                </Menu.Item>
                <Menu.Item name="about" active={this.props.activeItem === "about"} as={Link} to="/about" onClick={this.handleItemClick}>
                    About
                </Menu.Item>
                <Menu.Menu position="right"/>
                <Menu.Item name="help" active={this.props.activeItem === "help"} as={Link} to="/help" onClick={this.handleItemClick}>
                    Help
                </Menu.Item>
                <Menu.Item name="signup" active={this.props.activeItem === "sign-up"} as={Link} to="/sign-up" onClick={this.handleItemClick}>
                    Sign Up
                </Menu.Item>
                <Menu.Item name="login" active={this.props.activeItem === "login"} as={Link} to="/login" onClick={this.handleItemClick}>
                    Log In
                </Menu.Item>
            </Menu>
        )
    }
}

export default GuestMenu
