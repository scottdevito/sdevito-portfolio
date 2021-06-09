import * as React from "react";
import styled from "styled-components";
import { colors } from "../styles/global-styles";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  appHeaderHeight,
  centerContentWidth,
  navLinksWidth,
  scrollSpeed,
} from "../consts";

export interface AppHeaderProps {}

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
          <Link to="projects" smooth={true} duration={scrollSpeed}>
            <NavLink>Projects</NavLink>
          </Link>
          <Link to="experiences" smooth={true} duration={scrollSpeed * 2}>
            <NavLink>Experiences</NavLink>
          </Link>
          <NavLink
            onClick={() =>
              scroll.scrollToBottom({
                smooth: "easeOutQuart",
                duration: 12000,
              })
            }
          >
            Contact
          </NavLink>
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

  @media (max-width: 1250px) {
    width: 80%;
  }

  @media (max-width: 630px) {
    flex-direction: column;
  }
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
