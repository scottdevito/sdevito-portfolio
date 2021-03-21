import * as React from "react";
import styled from "styled-components";
import { colors } from "../styles/global-styles";

export interface AppHeaderProps {}

export const appHeaderHeight = `120px`;
export const centerContentWidth = `65%`; //TODO Media query to 50% for 4k screens
export const navLinksWidth = `40%`;

const AppHeader: React.FC<AppHeaderProps> = () => {
  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <HomeLink>
          Scott{" "}
          <span style={{ color: colors.lightGreen, marginLeft: "8px" }}>
            DeVito
          </span>
        </HomeLink>
        <NavLinks>
          <NavLink>Landing</NavLink>
          <NavLink>Projects</NavLink>
          <NavLink>Experiences</NavLink>
          <NavLink>Contact</NavLink>
        </NavLinks>
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};

export default AppHeader;

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${appHeaderHeight};
  background-color: #fff;
`;

const HeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: ${centerContentWidth};
`;

const HomeLink = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-width: 20%;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${navLinksWidth};
`;

// Pass active prop
const NavLink = styled.a`
  margin: 0 5px;
  color: gray;
  transition: 0.2s ease-in-out color;

  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
