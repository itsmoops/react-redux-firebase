import styled from 'styled-components'

const StyledSlider = styled.input`
	-webkit-appearance: none;
	width: 100%;
	min-height: unset;
	height: 15px;
	border-radius: 5px;
	background: ${colors.background.darken(0.2)};
	outline: none;
	-webkit-transition: 0.2s;
	transition: opacity 0.2s;
	overflow: initial;

	&:focus {
		border-bottom: 2px solid ${colors.background.darken(0.2)};
	}

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: ${colors.accent1};
		cursor: pointer;
		&:hover {
			cursor: -webkit-grab;
		}
		&:active {
			cursor: -webkit-grabbing;
		}
	}

	&::-moz-range-thumb {
		width: 25px;
		height: 25px;
		border-radius: 50%;
		background: ${colors.accent1};
		cursor: pointer;
	}
`

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
			<div>
				<StyledSlider
					type="range"
					step={this.props.step}
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
