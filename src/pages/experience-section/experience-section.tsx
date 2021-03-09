import * as React from "react";
import styled from "styled-components";
import { colors } from "../../styles/global-styles";
import spaceshipPhase1 from "../../assets/images/spaceshipPhase1.svg";
import spaceshipPhase2 from "../../assets/images/spaceshipPhase2.svg";
import spaceshipPhase3 from "../../assets/images/spaceshipPhase3.svg";

export interface ExperienceSectionProps {}

const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  return (
    <ExperienceSectionWrapper>
      <SpaceshipWrapper>
        <SpaceshipSequence
          src={spaceshipPhase3}
          alt="Space ship launch phase 3"
        />
        <SpaceshipSequence
          src={spaceshipPhase2}
          alt="Space ship launch phase 2"
        />
        <SpaceshipSequence
          src={spaceshipPhase1}
          alt="Space ship launch phase 1"
        />
      </SpaceshipWrapper>
      <ExperiencesWrapper>Experiences</ExperiencesWrapper>
    </ExperienceSectionWrapper>
  );
};

export default ExperienceSection;

const ExperienceSectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 10rem;
  height: 220vh;
  min-height: 220vh;
  background-color: ${colors.spaceBlack};
`;

const SpaceshipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  flex-grow: 1;
`;

const ExperiencesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
`;

const SpaceshipSequence = styled.img``;
