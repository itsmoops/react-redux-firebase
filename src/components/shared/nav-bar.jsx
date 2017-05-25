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
            <Menu attached="top">
                <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to="/"/>
                <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} as={Link} to="/about"/>
            </Menu>
        )
    }
}

export default NavBar
