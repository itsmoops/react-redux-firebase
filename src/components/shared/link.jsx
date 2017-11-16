import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default styled(Link)`
	margin-top: 10px;
	text-decoration: none;
	color: ${colors.link};
	&:active {
		color: ${colors.link.darken(0.15)};
	}
	&:hover {
		color: ${colors.link.darken(0.15)};
	}
	&:focus {
		color: ${colors.link.darken(0.15)};
		outline: none;
	}
	&:visited {
		color: ${colors.link.darken(0.15)};
	}
`
