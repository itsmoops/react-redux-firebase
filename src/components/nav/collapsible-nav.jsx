import {Link} from 'react-router-dom'
import {Button, Container, Menu, Icon} from 'semantic-ui-react'
import {isMobile} from '../../utilities/utilities'
import './nav-bar.less'

class CollapsibleNav extends React.Component {
    state = {
        mobileMenu: isMobile(),
        menuOpen: false
    }
    componentDidMount = () => {
        window.addEventListener('resize', this.updateWidth)
    }
    updateWidth = () => {
        this.setState({
            mobileMenu: isMobile()
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
        if (!this.props.children.type.name === 'Menu') {
            console.error('CollapsibleNav requires Semantic UI Menu as child')
        }
        return (
            <div>
                {this.state.mobileMenu
                    ? <div className='nav-bar'>
                            <Button basic icon onClick={this.handleIconClick}>
                                <Icon flipped={!this.state.menuOpen
                                    ? 'vertically'
                                    : 'horizontally'} size='large' name='chevron up'/>
                            </Button>
                            {this.state.menuOpen && this.props.children}
                        </div>
                    : this.props.children}
            </div>
        )
    }
}

export default CollapsibleNav
