import {Link} from "react-router-dom"
import {Button, Container, Menu, Icon} from "semantic-ui-react"
import "./nav-bar.less"

class CollapsibleNav extends React.Component {
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
        console.log(this.props.children)
        if (!this.props.children.type.name === "Menu") {
            console.error("CollapsibleNav requires Semantic UI Menu as child")
        }
        return (
            <div>
                {this.state.stackMenu
                    ? <div className="nav-bar">
                            <Button basic icon onClick={this.handleIconClick}>
                                <Icon flipped={!this.state.menuOpen
                                    ? "vertically"
                                    : "horizontally"} size="large" name="chevron up"/>
                            </Button>
                            {this.state.menuOpen && this.props.children}
                        </div>
                    : this.props.children}
            </div>
        )
    }
}

export default CollapsibleNav
