import { withRouter } from 'react-router'

class NavItem extends React.PureComponent {
	handleClick = () => {
		this.props.history.push(this.props.linkTo)
	}

	render() {
		let itemClasses = 'nav-item'
		if (this.props.active) {
			itemClasses = `${itemClasses} nav-item-active`
		}
		if (this.props.align === 'left') {
			itemClasses = `${itemClasses} nav-item-left`
		} else if (this.props.align === 'right') {
			itemClasses = `${itemClasses} nav-item-right`
		}
		return (
			<div className={itemClasses} onClick={this.handleClick}>
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

export default withRouter(NavItem)
