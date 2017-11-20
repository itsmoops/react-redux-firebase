import styled, { css } from 'styled-components'

const StyledButton = styled.button`
	background: ${colors.buttonBackground};
	width: ${props => props.width};
	float: ${props => props.align};
	height: 50px;
	padding: 10px 16px;
	margin: 5px 5px;
	font-size: 18px;
	font: inherit;
	cursor: pointer;
	outline: none;
	border-radius: ${props => props.theme.borderRadius};
	border: 1px solid ${colors.buttonBackground.darken(0.1)};
	&:hover {
		background-color: ${colors.buttonBackground.darken(0.1)};
	}
`

class Button extends React.PureComponent {
    render() {
        return (
            <StyledButton
                type={this.props.type || 'submit'}
                onClick={this.props.onClick}
                align={this.props.align}
                width={this.props.width}>
                {this.props.children}
            </StyledButton>
        )
    }
}

Button.defaultProps = {
    type: 'submit',
    width: '100%'
}

Button.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string
}

export default Button
