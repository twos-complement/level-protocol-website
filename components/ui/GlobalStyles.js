import { createGlobalStyle } from 'styled-components'

import {
  h1Styles,
  h2Styles,
  h3Styles,
  h4Styles,
  body1Styles,
} from './Typography'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Geneva";
    src: url("/fonts/geneva/Geneva-Normal-Italic.ttf");
    font-style: italic, oblique;
    font-display: swap;
  }
  @font-face {
    font-family: "Geneva";
    src: url("/fonts/geneva/Geneva-Bold-Italic.ttf");
    font-style: italic, oblique;
    font-weight: bold;
    font-display: swap;
  }
  @font-face {
    font-family: "Geneva";
    src: url("/fonts/geneva/Geneva-Normal.ttf");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: "Geneva";
    src: url("/fonts/geneva/Geneva-Bold.ttf");
    font-weight: 700;
    font-style: bold;
    font-display: swap;
  }
  @font-face {
    font-family: "Alagard";
    src: url("/fonts/alagard.ttf");
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Matter';
    font-display: swap;
    src: url('/fonts/matter/Matter-Regular.woff2') format('woff2'), url('/fonts/matter/Matter-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Matter';
    font-display: swap;
    src: url('/fonts/matter/Matter-Bold.woff2') format('woff2'), url('/fonts/matter/Matter-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'Matter';
    font-display: swap;
    src: url('/fonts/matter/Matter-SemiBold.woff2') format('woff2'), url('/fonts/matter/Matter-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Matter';
    font-display: swap;
    src: url('/fonts/matter/Matter-RegularItalic.woff2') format('woff2'), url('/fonts/matter/Matter-RegularItalic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Matter';
    font-display: swap;
    src: url('/fonts/matter/Matter-BoldItalic.woff2') format('woff2'), url('/fonts/matter/Matter-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
  }
  @font-face {
    font-family: 'Matter';
    font-display: swap;
    src: url('/fonts/matter/Matter-SemiBoldItalic.woff2') format('woff2'), url('/fonts/matter/Matter-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
  }

  * {
    ${body1Styles}
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    background-color: ${props =>
      props.theme.colors[props.bodyBackgroundColor || 'white']};
    color: ${props => props.theme.colors[props.bodyColor || 'black']};
    font-size: 62.5%; /* base 10 rems */
    min-height: 100vh;

    :root {
      --hue: 0;
    }
    cursor: ${props => props.theme.cursors.default};
  }
  body.animate {
    background-color: hsl(var(--hue), 100%, 50%);
  }

  h1 { ${h1Styles} }
  h2 { ${h2Styles} }
  h3 { ${h3Styles} }
  h4 { ${h4Styles} }
  p {
    margin: 0;
    ${body1Styles}
  }
  ul {
    padding-inline-start: 1.1em;
  }
  ol {
    padding-inline-start: 1.25em;
  }
  li {
    ${body1Styles}
    padding: 5px 0;
    overflow: display;
  }
  a:focus,
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
    cursor: ${props => props.theme.cursors.select};
  }
  input {
    padding: 20px;
    width: 100%;
    font-size: 2rem;
    border-radius: 5px;
    border: 1px solid gray;
  }
  button {
    padding: 20px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid gray;
    cursor: ${props => props.theme.cursors.select};
  }
  ::selection {
    background: ${props => props.theme.colors.vibrantGreen};
  }
`

export default GlobalStyles
