import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as globalActions from '../../actions/global-actions'
import { caretDown } from 'react-icons-kit/fa/caretDown'
import './dropdown.less'

class Dropdown extends React.PureComponent {
	displayDropdown = () => {
		this.props.actions.toggleMenuDropdown(!this.props.global.menuOpen)
	}
	render() {
		let classes = 'dropdown-content'
		if (this.props.global.menuOpen) {
			classes = `${classes} dropdown-open`
		}
		const DropdownHeader = horizontalCenter(props => (
			<button className="drop-btn" onClick={this.displayDropdown}>
				{props.children}
			</button>
		))
		return (
			<div className="dropdown">
				<DropdownHeader>
					{this.props.value} <Icon icon={caretDown} />
				</DropdownHeader>
				<div className={classes}>{this.props.children}</div>
			</div>
		)
	}
}

Dropdown.defaultProps = {
	value: ''
}

Dropdown.propTypes = {
	value: PropTypes.string
}

function mapStateToProps(state, ownProps) {
	return { global: state.global }
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(globalActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
