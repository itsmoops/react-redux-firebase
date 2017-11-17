import styled from 'styled-components'

const StyledFlexContainer = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0px;
	bottom: 0px;
	padding: 0 15 0 15;
	overflow: scroll;
	text-align: ${(props) => {
        if (props.right) {
            return 'right;'
        } else if (props.centered) {
            return 'center;'
        }
        return 'left;'
    }}
		${props => props.theme.screen.xSmall} {
		align-items: inherit;
	}
`

const StyledFlex = styled.div`
	${props => props.theme.screen.large} {
		width: 40%;
	}
	${props => props.theme.screen.medium} {
		width: 55%;
	}
	${props => props.theme.screen.small} {
		width: 80%;
	}
	${props => props.theme.screen.xSmall} {
		margin-top: ${props => props.theme.navBarHeight};
		width: 95%;
	}
`

class FlexContainer extends React.PureComponent {
    render() {
        return (
            <StyledFlexContainer centered={this.props.centered} right={this.props.right}>
                <StyledFlex>{this.props.children}</StyledFlex>
            </StyledFlexContainer>
        )
    }
}

export default FlexContainer
