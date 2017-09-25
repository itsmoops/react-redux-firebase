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

		const icon = this.props.icon ? (
			<Icon icon={this.props.icon} size={this.props.iconSize} />
		) : (
			undefined
		)

		const Item = horizontalCenter(props => (
			<div
				className={classes}
				onClick={() => {
					this.props.onClick()
					this.handleClick()
				}}
			>
				<p>{props.children}</p>
			</div>
		))
		return (
			<Item>
				{this.props.value || this.props.children} {icon}
			</Item>
		)
	}
}

NavItemSmall.defaultProps = {
	active: false,
	linkTo: '/',
	value: '',
	icon: undefined,
	iconSize: 24
}

NavItemSmall.propTypes = {
	active: PropTypes.bool,
	linkTo: PropTypes.string,
	value: PropTypes.string,
	icon: PropTypes.object,
	iconSize: PropTypes.number
}

export default withRouter(NavItemSmall)
