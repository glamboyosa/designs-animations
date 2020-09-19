import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
::root {
    --primaryGreen: #44B896;
    --secondaryGreen: #4CCCA7;
    --primaryPurple: #392D63;
    --primaryBlack: #0B0B0B;
}
*, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;

}
html {
    font-size: 62.5%;
}
body {
    line-height: 1.69;
    font-family: 'DM Serif Display', serif;
}
`;
export default GlobalStyle;
