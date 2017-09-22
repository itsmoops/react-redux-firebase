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
			<div
				className={itemClasses}
				onClick={() => {
					this.props.onClick()
					this.handleClick()
				}}
			>
				<p>{this.props.value}</p>
			</div>
		)
	}
}

NavItemSmall.defaultProps = {
	active: false,
	linkTo: '/',
	value: ''
}

NavItemSmall.propTypes = {
	active: PropTypes.bool,
	linkTo: PropTypes.string,
	value: PropTypes.string
}

export default withRouter(NavItemSmall)
