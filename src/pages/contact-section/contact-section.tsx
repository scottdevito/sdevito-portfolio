import * as React from "react";
import styled from "styled-components";
import { colors } from "../../styles/global-styles";
import stars from "../../assets/images/stars.svg";
import starsWithoutGalaxy from "../../assets/images/starsWithoutGalaxy.svg";
import mountains from "../../assets/images/mountains.svg";
import GitHubIcon from "../../assets/icons/githubIcon.svg";
import PhoneIcon from "../../assets/icons/phoneIcon.svg";
import LinkedInIcon from "../../assets/icons/linkedInIcon.svg";
import { Parallax } from "react-parallax";

export interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <ContactSectionWrapper>
      <Parallax
        bgImage={stars}
        strength={300}
        bgImageStyle={{ opacity: 0.5 }}
        renderLayer={() => (
          <AmbientLightWrapper>
            <StarsWithoutGalaxy src={starsWithoutGalaxy} alt="stars" />
            <Mountains src={mountains} alt="mountains" />
            <ContactCTAHeader>
              Feel free to reach me{" "}
              <YellowHighlight>
                <MailToLink href="mailto: scottadevito@gmail.com">
                  here
                </MailToLink>
                .
              </YellowHighlight>{" "}
              <br /> I'd be happy to hear from{" "}
              <YellowHighlight>you.</YellowHighlight>
            </ContactCTAHeader>
            <Footer>
              <ContactLinksWrapper>
                <ContactLinkWrapper
                  href="https://github.com/scottdevito"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <ContactIcon src={GitHubIcon} alt="GitHub icon" />
                  <ContactLink>github.com/scottdevito</ContactLink>
                </ContactLinkWrapper>
                <ContactLinkWrapper
                  href="Tel: 516-476-0877"
                  rel="noreferrer noopener"
                >
                  <ContactIcon src={PhoneIcon} alt="Phone number icon" />
                  <ContactLink>516-476-0877</ContactLink>
                </ContactLinkWrapper>
                <ContactLinkWrapper
                  href="https://linkedin.com/in/scott-devito/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <ContactIcon src={LinkedInIcon} alt="LinkedIn icon" />
                  <ContactLink>linkedin.com/in/scott-devito</ContactLink>
                </ContactLinkWrapper>
              </ContactLinksWrapper>
            </Footer>
          </AmbientLightWrapper>
        )}
      ></Parallax>
    </ContactSectionWrapper>
  );
};

export default ContactSection;

const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  min-height: 110vh;
  width: 100%;
  background-color: ${colors.spaceBlack};

  @media (max-width: 1500px) {
    min-height: initial;
  }
`;

const AmbientLightWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    180deg,
    #404040 0%,
    rgba(119, 71, 179, 0.82) 137.48%
  );
`;

const StarsWithoutGalaxy = styled.img`
  width: 100%;
  max-width: 100%;
  transform: translateY(220px);
  opacity: 0.3;

  @media (min-width: 2200px) {
    transform: translateY(220px);
  }

  @media (min-width: 3000px) {
    transform: translateY(300px);
  }
`;

const Mountains = styled.img`
  width: 100%;
  max-width: 100%;
  margin-bottom: -8px;

  @media (min-width: 2000px) {
    margin-bottom: -9px;
  }

  @media (min-width: 2700px) {
    margin-bottom: -10px;
  }

  @media (min-width: 3000px) {
    margin-bottom: -11px;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 100%;
  background-color: #b881ff;
`;

const ContactLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const ContactLinkWrapper = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 25px;
  text-decoration: none;
  color: #000;
  transition: 0.2s ease-in-out color;

  &:hover {
    color: ${colors.spaceBlack};
  }
`;

const ContactIcon = styled.img`
  margin-right: 10px;
`;

const ContactLink = styled.p`
  font-size: 20px;
  margin: 0;
`;

const ContactCTAHeader = styled.h1`
  position: absolute;
  bottom: 35%;
  left: 35%;
  font-size: 50px;
  color: #fff;

  @media (max-width: 1100px) {
    left: 15%;
  }
`;

const YellowHighlight = styled.span`
  color: ${colors.sunStarYellow};
`;

const MailToLink = styled.a`
  text-decoration: none;
  color: ${colors.sunStarYellow};
`;
