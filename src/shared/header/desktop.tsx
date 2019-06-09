import React from "react";
import Brand from "./brand";
import styled from "../styled-components/styled-components";
import Navigation from "./navigation";

// tslint:disable:typedef
const Desktop: React.FC = () => {
  return (
    <Wrapper>
      <Brand />
      <Navigation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;

  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto 1fr;

  padding-left: 40px;
  padding-right: 40px;

  nav {
    grid-column: 3/4;
    justify-self: flex-end;
  }
`;

export default Desktop;
