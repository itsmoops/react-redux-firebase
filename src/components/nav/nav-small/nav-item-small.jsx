import { withRouter } from 'react-router'
import './nav-item-small.less'

class NavItemSmall extends React.PureComponent {
	handleClick = () => {
		this.props.history.push(this.props.linkTo)
	}
	render() {
		let classes = 'nav-item-small'
		if (this.props.active) {
			classes = `${classes} nav-item-active`
		}
		return (
			<div
				className={classes}
				onClick={() => {
					this.props.onClick()
					this.handleClick()
				}}
			>
				<p>{this.props.value || this.props.children}</p>
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
