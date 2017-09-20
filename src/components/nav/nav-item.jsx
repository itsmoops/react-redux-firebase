import { BrowserRouter as Router } from 'react-router-dom'

class NavItem extends React.Component {
    componentDidMount() {
        this.props.history.push('/')
    }
    handleClick() {
        this.props.history.push(this.props.linkTo)
    }

    render() {
        let itemClasses = ''
        if (this.props.active) {
            itemClasses = 'nav-item-active'
        }
        if (this.props.align === 'left') {
            itemClasses = `${itemClasses} nav-item-left`
        } else if (this.props.align === 'right') {
            itemClasses = `${itemClasses} nav-item-right`
        }
        return (
            <div className={`nav-item ${itemClasses}`} onClick={this.handleClick}>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

NavItem.defaultProps = {
    active: false,
    align: 'left',
    linkTo: '/'
}

NavItem.propTypes = {
    active: PropTypes.bool,
    align: PropTypes.string,
    linkTo: PropTypes.string
}

export default NavItem
