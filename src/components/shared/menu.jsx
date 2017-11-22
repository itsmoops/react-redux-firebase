import styled, { css } from 'styled-components'

const StyledMenuContainer = styled.div`
	width: 100%;
	text-align: center;
	margin: 20 0 40 0;
`

const StyledMenu = styled.span`
	width: 100%;
`

const StyledMenuItem = styled.a`
	margin: 0 5 0 5;
	padding: 15 10;
	border-bottom: ${(props) => {
        if (props.active) {
            return css`
				2px solid ${colors.accent1};
			`
        }
    }};
	&:hover {
		cursor: pointer;
	}
`

const Menu = props => (
    <StyledMenuContainer>
        <StyledMenu>{props.children}</StyledMenu>
    </StyledMenuContainer>
)

const Item = props => (
    <StyledMenuItem active={props.active} onClick={props.onClick}>
        {props.children}
    </StyledMenuItem>
)

export default { Menu, Item }
