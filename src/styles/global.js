import { injectGlobal } from 'styled-components'
import colors from './colors'
import common from './common'
import reset from './reset'

const global = `
  body {
    margin: 0;
    background: ${colors.background};
    font-family: Helvetica;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: ${colors.font1};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }

  hr {
    border-top: 1px solid rgba(34, 36, 38, 0.1);
  }

  ${common.screen.large} {
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1.17em;
    }
  }

  ${common.screen.medium} {
    h1 {
      font-size: 2em;
    }
    h2 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1.17em;
    }
  }

  ${common.screen.small} {
    h1 {
      font-size: 1.8em;
    }
    h2 {
      font-size: 1.25em;
    }
    h3 {
      font-size: 1em;
    }
  }

  ${common.screen.xSmall} {
    h1 {
      font-size: 1.2em;
    }
    h2 {
      font-size: 0.8em;
    }
    h3 {
      font-size: 0.7em;
    }
  }
`

export default injectGlobal`
    ${reset}
    ${global}
`
