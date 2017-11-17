import { injectGlobal } from 'styled-components'
import reset from './reset'
import colors from './colors'

const global = `
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
`

export default injectGlobal`
    ${reset}
    ${global}
`
