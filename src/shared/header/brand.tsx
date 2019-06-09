import React, { ReactNode } from "react";
import styled from "../styled-components/styled-components";

interface IProps {
  children: ReactNode;
}

const Brand: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

// tslint:disable-next-line:typedef
const Wrapper = styled.div`
  background-color: ${props => props.theme.colors.lightForestGreen};
  width: 200px;
  height: 62px;
`;

export default Brand;
