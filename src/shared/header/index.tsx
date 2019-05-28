import React from "react"
import Desktop from "./desktop"
import styled from "../styled-components/styled-components"

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Desktop />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100vw;
  height: 139px;
  background-color: #00151e;
`

export default Header
