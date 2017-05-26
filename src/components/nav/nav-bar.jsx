import {Link} from "react-router-dom"
import {Button, Container, Menu, Icon} from "semantic-ui-react"
import "./nav-bar.less"

class NavBar extends React.Component {
    state = {
        stackMenu: window.innerWidth < 768
            ? true
            : false,
        menuOpen: false
    }
    componentDidMount = () => {
        window.addEventListener("resize", this.updateDimensions)
    }
    updateDimensions = () => {
        this.setState({
            stackMenu: window.innerWidth < 768
                ? true
                : false
        })
    }
    handleItemClick = (event) => {
        this.setState({menuOpen: false})
    }
    handleIconClick = (event) => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }
    render() {
        const activeItem = this.props.location.pathname.replace("/", "")

        let menuItems = <Menu attached="top" pointing secondary stackable className="nav-bar">
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

        return (
            <div>
                {this.state.stackMenu
                    ? <div className="nav-bar">
                            <Button basic icon onClick={this.handleIconClick}>
                                <Icon flipped={!this.state.menuOpen
                                    ? "vertically"
                                    : "horizontally"} size="large" name="chevron up"/>
                            </Button>
                            {this.state.menuOpen && menuItems}
                        </div>
                    : menuItems}
            </div>
        )
    }
}

export default NavBar
