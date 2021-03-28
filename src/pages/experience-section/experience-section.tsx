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
      {/* <SpaceshipWrapper> */}

      <SpaceshipSequenceWrapper3>
        <SpaceshipSequence
          src={spaceshipPhase3}
          alt="Space ship launch phase 3"
        />
      </SpaceshipSequenceWrapper3>
      <SpaceshipSequenceWrapper2>
        <SpaceshipSequence
          src={spaceshipPhase2}
          alt="Space ship launch phase 2"
        />
      </SpaceshipSequenceWrapper2>
      <SpaceshipSequenceWrapper1>
        <SpaceshipSequence
          src={spaceshipPhase1}
          alt="Space ship launch phase 1"
        />
      </SpaceshipSequenceWrapper1>
      <ExperienceCard3>Card</ExperienceCard3>
      <ExperienceCard2>Card</ExperienceCard2>
      <ExperienceCard1>Card</ExperienceCard1>
    </ExperienceSectionWrapper>
  );
};

export default ExperienceSection;

const ExperienceSectionWrapper = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 3fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  position: relative;
  padding-top: 20vh;
  height: 220vh;
  min-height: 220vh;
  background-color: ${colors.spaceBlack};
`;

const SpaceshipSequenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SpaceshipSequence = styled.img``;

const SpaceshipSequenceWrapper3 = styled(SpaceshipSequenceWrapper)`
  grid-area: 1 / 2 / 2 / 3;
`;

const SpaceshipSequenceWrapper2 = styled(SpaceshipSequenceWrapper)`
  grid-area: 3 / 2 / 4 / 3;
`;

const SpaceshipSequenceWrapper1 = styled(SpaceshipSequenceWrapper)`
  grid-area: 5 / 2 / 6 / 3;
`;

const ExperienceCard = styled.div`
  width: 90%;
  height: 400px;
  background-color: #fff;
  border-radius: 8px;
`;

const ExperienceCard3 = styled(ExperienceCard)`
  grid-area: 1 / 4 / 2 / 5;
`;

const ExperienceCard2 = styled(ExperienceCard)`
  grid-area: 3 / 4 / 4 / 5;
`;

const ExperienceCard1 = styled(ExperienceCard)`
  grid-area: 5 / 4 / 6 / 5;
`;
