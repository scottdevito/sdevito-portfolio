import * as React from "react";
import styled from "styled-components";

export const colors = {
  lightGreen: "#00F4D9",
  lightBlue: "#CCDDFD",
  lightGray: "#CDCFD4",
  spaceBlack: "#404040",
};

export const ColorUnderline: React.FC = (props): React.ReactElement => {
  return <Underline>{props.children}</Underline>;
};

const Underline = styled.span`
  background-image: linear-gradient(
    120deg,
    ${colors.lightBlue} 0%,
    ${colors.lightBlue} 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 30%;
  background-position: 0 98%;
  transition: background-size 0.25s ease-in;
`;
