import React from "react";
import { Link } from "gatsby";
import styled from "../../styled-components/styled-components";

const Desktop: React.FC = () => (
  <StyledNav>
    <StyledLink to="/">HEM</StyledLink>
    <StyledLink to="/services">TJÄNSTER</StyledLink>
    <StyledLink to="/about">OM MIG</StyledLink>
    <StyledLink to="/contact">KONTAKT</StyledLink>
  </StyledNav>
);

// tslint:disable:typedef
const StyledLink = styled(Link)`
  color: white;
  margin-left: 40px;
  font-family: ${props => props.theme.fonts.text};

  :hover {
    border-bottom: 2px solid ${props => props.theme.colors.lightForestGreen};
  }
`;

const StyledNav = styled.nav`
  height: 25px;
  display: flex;
`;

export default Desktop;
