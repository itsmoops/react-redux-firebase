import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import onClickOutside from 'react-onclickoutside'
import * as globalActions from '../../actions/global-actions'
import ProfilePicture from './profile-picture'
import { caretDown } from 'react-icons-kit/fa/caretDown'
import './dropdown.less'

class Dropdown extends React.PureComponent {
	handleClickOutside = () => {
		this.props.actions.toggleMenuDropdown(false)
	}

	toggleDropDown = () => {
		this.props.actions.toggleMenuDropdown(!this.props.global.menuOpen)
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
					<ProfilePicture tiny />
					<Icon icon={caretDown} />
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
	return {
		global: state.global,
		user: state.user
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(globalActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(Dropdown))
