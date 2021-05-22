import * as React from "react";
import styled from "styled-components";
import { centerContentWidth, navLinksWidth, scrollSpeed } from "../../consts";
import landingPageBg from "../../assets/images/landingPageBg.svg";
import laptopAndMobile from "../../assets/images/laptopAndMobile.svg";
import watermarkBgTexturePluses from "../../assets/images/watermarkBgTexturePluses.svg";
import watermarkBgCircle from "../../assets/images/watermarkBgTextureCircle.svg";
import watermarkBgTextureTriangle from "../../assets/images/watermarkBgTextureTriangle.svg";
import { ColorUnderline } from "../../styles/global-styles";
import { Link } from "react-scroll";

export interface LandingSectionProps {}

const LandingSection: React.FC<LandingSectionProps> = () => {
  return (
    <LandingSectionWrapper>
      <TopContentWrapper>
        <TexturePluses src={watermarkBgTexturePluses} />
        <TextureCircle src={watermarkBgCircle} />
        <TextureTriangle src={watermarkBgTextureTriangle} />
        <IntroAndCTAWrapper>
          <Title>
            Front End <ColorUnderline>Software Engineer</ColorUnderline>
          </Title>
          <Copy>
            I use web technologies to create tools that help people solve
            problems. I enjoy the whole stack but love front end. Check out the
            link below to see what I've been up to.
          </Copy>
          <Link to="projects" smooth={true} duration={scrollSpeed}>
            <CTAButton>View my work</CTAButton>
          </Link>
        </IntroAndCTAWrapper>
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
  width: 100%;
  background-color: #fff;
  margin-bottom: -40%;
  min-height: calc(100vh - 120px);
`;

const TopContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${centerContentWidth};
  height: 80%;
  min-height: 80%;
  z-index: 2;
  margin-top: 1%;
  position: relative;
  transform: translateY(40px);

  @media (max-width: 1250px) {
    width: 80%;
  }

  @media (max-width: 880px) {
    flex-direction: column;
  }
`;

const BlueMountainsBg = styled.img`
  min-height: 100vh;
  min-width: 100%;
  width: 100%;
  transform: translateY(-10%);

  @media (max-width: 880px) {
    min-height: 50vh;
  }
`;

const IntroAndCTAWrapper = styled.div`
  max-width: 390px;
`;

const LaptopAndMobileImg = styled.img`
  width: 360px;

  @media (max-width: 880px) {
    width: 100%;
    visibility: hidden;
  }
`;

const LaptopAndMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${navLinksWidth};
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Copy = styled.p`
  margin-top: 0;
  margin-bottom: 20px;
`;

const CTAButton = styled.button`
  background: linear-gradient(180deg, rgba(0, 255, 209, 0.84) 0%, #07ddeb 100%);
  border: 3px solid #ffffff;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 10px 20px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;

const TexturePluses = styled.img`
  position: absolute;
  top: 12px;
  left: -100px;

  @media (max-width: 880px) {
    top: 80%;
    left: -68px;
  }
`;

const TextureCircle = styled.img`
  position: absolute;
  top: 44px;
  left: 55%;

  @media (max-width: 880px) {
    display: none;
  }
`;

const TextureTriangle = styled.img`
  position: absolute;
  top: 12px;
  right: 45px;
`;
