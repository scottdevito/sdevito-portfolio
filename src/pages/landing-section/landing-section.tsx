import * as React from "react";
import styled from "styled-components";
import {
  appHeaderHeight,
  centerContentWidth,
} from "../../components/app-header";
import landingPageBg from "../../assets/images/landingPageBg.svg";
import laptopAndMobile from "../../assets/images/laptopAndMobile.svg";

export interface LandingSectionProps {}

const LandingSection: React.FC<LandingSectionProps> = () => {
  return (
    <LandingSectionWrapper>
      <TopContentWrapper>
        <IntroAndCTAWrapper>Intro and CTA</IntroAndCTAWrapper>
        <LaptopAndMobileWrapper>
          <LaptopAndMobileImg src={laptopAndMobile} />
        </LaptopAndMobileWrapper>
      </TopContentWrapper>
      <BlueMountainsBg src={landingPageBg} alt="landing page bg" />
    </LandingSectionWrapper>
  );
};

export default LandingSection;

const LandingSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: calc(100vh - ${appHeaderHeight}); */
  width: 100%;
  background-color: #fff;
`;

const TopContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${centerContentWidth};
  height: 50%;
  min-height: 80%;
  z-index: 2;
  margin-top: 1%;
`;

const BlueMountainsBg = styled.img`
  width: 100%;
  transform: translateY(-14%);
`;

const IntroAndCTAWrapper = styled.div``;

const LaptopAndMobileImg = styled.img`
  width: 360px;
`;

const LaptopAndMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
`;
