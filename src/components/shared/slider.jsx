import './slider.less'

class Slider extends React.Component {
	state = {
		sliderValue: 1
	}
	updateSlider = e => {
		this.setState({
			sliderValue: e.target.value
		})
	}
	render() {
		return (
			<div className="slide-container">
				<input
					type="range"
					step={this.props.step}
					className="slider"
					min={this.props.min}
					max={this.props.max}
					value={this.props.value}
					onChange={e => {
						this.props.onChange(e)
					}}
				/>
			</div>
		)
	}
}

Slider.defaultProps = {
	min: '1',
	max: '100',
	step: '1'
}

Slider.propTypes = {
	min: PropTypes.string,
	max: PropTypes.string,
	step: PropTypes.string
}

export default Slider
