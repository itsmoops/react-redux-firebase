import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as globalActions from '../../actions/global-actions'
import { caretDown } from 'react-icons-kit/fa/caretDown'
import './dropdown.less'

class Dropdown extends React.PureComponent {
	componentDidMount = () => {
		document.addEventListener('click', this.handleClickOutside)
	}

	toggleDropDown = e => {
		this.props.actions.toggleMenuDropdown(!this.props.global.menuOpen)
	}

	handleClickOutside = e => {
		if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
			console.log('You clicked outside of me!')
		}
	}

	setWrapperRef = node => {
		this.wrapperRef = node
	}

	render() {
		let classes = 'dropdown-content'
		if (this.props.global.menuOpen) {
			classes = `${classes} dropdown-open`
		}
		const DropdownHeader = horizontalCenter(props => (
			<button className="drop-btn" onClick={this.toggleDropDown}>
				{props.children}
			</button>
		))
		return (
			<div className="dropdown">
				<DropdownHeader>
					{this.props.value} <Icon icon={caretDown} />
				</DropdownHeader>
				<div className={classes} ref={this.setWrapperRef}>
					{this.props.children}
				</div>
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
