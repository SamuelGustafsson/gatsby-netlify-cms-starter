import React, { ReactNode } from "react"
import Header from "../shared/header"
import { ThemeProvider } from "../shared/styled-components/styled-components"
import theme from "../shared/styled-components/theme"
import GlobalStyle from "../shared/globalstyle"

interface Props {
  children: ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  </ThemeProvider>
)

export default Layout
