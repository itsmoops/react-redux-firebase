import { injectGlobal } from 'styled-components'
import colors from './colors'

export default injectGlobal`
  body {
  	margin: 0;
    background: ${colors.background};
  	font-family: Helvetica;
  	font-family: 'Montserrat', sans-serif;
  	font-weight: 300;
  	font-size: 1.1em;
    color: ${colors.font1};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  	word-wrap: break-word;
  	text-align: center;
  }

  hr {
  	border-top: 1px solid rgba(34, 36, 38, 0.1);
  }

  button,
  input[type='submit'],
  input[type='reset'] {
  	// background: none !important;
  	color: inherit;
  	border: none;
  	font: inherit;
  	cursor: pointer;
  	outline: inherit !important;
  }
`
