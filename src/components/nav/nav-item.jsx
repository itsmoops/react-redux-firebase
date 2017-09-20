class NavItem extends React.PureComponent {
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
            <div className={`nav-item ${itemClasses}`}>
                <p>{this.props.children}</p>
            </div>
        )
    }
}

NavItem.defaultProps = {
    active: false,
    align: 'left'
}

NavItem.propTypes = {
    active: PropTypes.bool,
    align: PropTypes.string
}

export default NavItem
