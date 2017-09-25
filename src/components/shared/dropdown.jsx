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
		return (
			<div className="dropdown">
				<button className="dropbtn" onClick={this.displayDropdown}>
					{this.props.value} <Icon icon={caretDown} />
				</button>
				<div className={classes}>{this.props.children}</div>
			</div>
		)
	}
}

export default Dropdown
