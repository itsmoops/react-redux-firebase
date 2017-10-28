import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as globalActions from '../../actions/global-actions'
import { withRouter } from 'react-router'
import './dropdown-item.less'

class DropdownItem extends React.PureComponent {
	toggleMenu = () => {
		this.props.actions.toggleMenuDropdown(!this.props.global.menuOpen)
	}
	render() {
		let classes = 'dropdown-item'
		if (this.props.align === 'left') {
			classes = `${classes} align-left`
		} else if (this.props.align === 'right') {
			classes = `${classes} align-right`
		}
		if (this.props.active) {
			classes = `${classes} dropdown-active`
		}

		const icon = this.props.icon ? <Icon icon={this.props.icon} /> : undefined

		const Item = horizontalCenter(props => (
			<a
				className={classes}
				onClick={() => {
					this.props.linkTo && this.props.history.push(this.props.linkTo)
					this.props.onClick && this.props.onClick()
					this.toggleMenu()
				}}
				role="button"
				tabIndex="0"
			>
				{props.children}
			</a>
		))
		return (
			<Item>
				{icon} {this.props.value}
			</Item>
		)
	}
}

DropdownItem.defaultProps = {
	value: '',
	icon: undefined
}

DropdownItem.propTypes = {
	value: PropTypes.string,
	icon: PropTypes.object
}

function mapStateToProps(state) {
	return { global: state.global }
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(globalActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DropdownItem))
