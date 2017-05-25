import {Link} from 'react-router-dom'
import {Menu} from 'semantic-ui-react'
import './nav-bar.less'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeItem: 'home'
        }
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    handleItemClick(e, {name}) {
        this.setState({activeItem: name})
    }

    render() {
        const {activeItem} = this.state
        return (
            <Menu attached="top" pointing secondary>
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to="/">
                    Home
                </Menu.Item>
                <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} as={Link} to="/about">
                    About
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
                        Sign Up
                    </Menu.Item>
                    <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
                        Help
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default NavBar
