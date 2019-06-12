import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { ThemeType } from './Theme'

export default createGlobalStyle<{ theme: ThemeType }>`
  ${reset}
  * {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap');
    box-sizing: border-box;
  }
  body {
    background-color: ${p => p.theme.bgColor};
    color: ${p => p.theme.blackColor};
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    color: ${p => p.theme.blueColor};
    text-decoration: none;
  }
  input:focus {
    outline: none;
  }
`
