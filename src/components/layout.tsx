import React, { ReactNode } from "react";
import Header from "../shared/header";
import { ThemeProvider } from "../shared/styled-components/styled-components";
import theme from "../shared/styled-components/theme";
import GlobalStyle from "../shared/globalstyle";

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  </ThemeProvider>
);

export default Layout;
