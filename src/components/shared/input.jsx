import { eye } from 'react-icons-kit/fa/eye'
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash'
import './input.less'

class Input extends React.Component {
	state = {
		showText: false,
		inputType: this.props.type || 'text'
	}
	handleIconClick = () => {
		this.setState({
			showText: !this.state.showText,
			inputType: this.state.showText ? 'password' : 'text'
		})
	}
	render() {
		let classes = 'input'
		if (this.props.disabled) {
			classes = `${classes} input-disabled`
		}
		let icon
		if (this.props.toggleHiddenText) {
			if (!this.state.showText) {
				icon = <Icon className="eye" icon={eye} size={20} onClick={this.handleIconClick} />
			} else {
				icon = (
					<Icon
						className="eye"
						icon={eyeSlash}
						size={20}
						onClick={this.handleIconClick}
					/>
				)
			}
		}
		return (
			<div>
				<input
					className={classes}
					placeholder={this.props.placeholder}
					type={this.state.inputType}
					name={this.props.name}
					onChange={this.props.onChange}
					required={this.props.required}
				/>
				{icon}
			</div>
		)
	}
}

Input.defaultProps = {
	type: 'text'
}

Input.propTypes = {
	type: PropTypes.string
}

export default Input
