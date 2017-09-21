import { withRouter } from 'react-router'
import './nav-item-small.less'

class NavItemSmall extends React.PureComponent {
	handleClick = () => {
		this.props.history.push(this.props.linkTo)
	}

	render() {
		let itemClasses = 'nav-item-small'
		if (this.props.active) {
			itemClasses = `${itemClasses} nav-item-active`
		}
		return (
			<div className={itemClasses} onClick={this.handleClick}>
				<p>{this.props.children}</p>
			</div>
		)
	}
}

NavItemSmall.defaultProps = {
	active: false,
	linkTo: '/'
}

NavItemSmall.propTypes = {
	active: PropTypes.bool,
	linkTo: PropTypes.string
}

export default withRouter(NavItemSmall)
