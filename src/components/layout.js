import * as React from "react"

import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyle"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />

      <main>{children}</main>
    </>
  )
}

export default Layout
