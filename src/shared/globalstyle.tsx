import { createGlobalStyle } from "./styled-components/styled-components";

// tslint:disable-next-line:typedef
const GlobalStyle = createGlobalStyle`
html, body {
    width:100vw;
    height:100vh;
    margin: 0;
}

a {
    text-decoration:none;
}
`;

export default GlobalStyle;
