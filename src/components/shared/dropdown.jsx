import { caretDown } from 'react-icons-kit/fa/caretDown'
import './dropdown.less'

class Dropdown extends React.PureComponent {
	state = {
		dropDownOpen: false
	}
	displayDropdown = () => {
		this.setState({
			dropDownOpen: !this.state.dropDownOpen
		})
	}
	render() {
		let classes = 'dropdown-content'
		if (this.state.dropDownOpen) {
			classes = `${classes} dropdown-open`
		}
		const DropdownHeader = horizontalCenter(props => (
			<button className="dropbtn" onClick={this.displayDropdown}>
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

export default Dropdown
