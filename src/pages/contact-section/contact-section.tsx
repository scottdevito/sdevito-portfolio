import * as React from "react";
import styled from "styled-components";
import { colors } from "../../styles/global-styles";
import stars from "../../assets/images/stars.svg";
import mountains from "../../assets/images/mountains.svg";

export interface ContactSectionProps {}

const ContactSection: React.FC<ContactSectionProps> = () => {
  return (
    <ContactSectionWrapper>
      <AmbientLightWrapper>
        <Stars src={stars} alt="stars" />
        <Mountains src={mountains} alt="mountains" />
        <Footer />
      </AmbientLightWrapper>
    </ContactSectionWrapper>
  );
};

export default ContactSection;

const ContactSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 110vh;
  width: 100%;
  background-color: ${colors.spaceBlack};
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

const Stars = styled.img`
  width: 100%;
  max-width: 100%;
  transform: translateY(100px);
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
  height: 50px;
  width: 100%;
  background-color: #b881ff;
`;
