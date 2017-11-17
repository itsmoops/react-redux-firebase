import styled from 'styled-components'

const StyledButton = styled.button`
	background: ${colors.buttonBackground};
	width: 100%;
	height: 50px;
	padding: 10px 16px;
	margin: 5px 0px;
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
            <StyledButton type={this.props.type || 'submit'} onClick={this.props.onClick}>
                {this.props.children}
            </StyledButton>
        )
    }
}

Button.defaultProps = {
    type: 'submit'
}

Button.propTypes = {
    type: PropTypes.string
}

export default Button
