import * as React from "react";
import styled from "styled-components";
import { colors, ColorUnderline } from "../../styles/global-styles";
import spaceshipPhase1 from "../../assets/images/spaceshipPhase1.svg";
import spaceshipPhase2 from "../../assets/images/spaceshipPhase2.svg";
import spaceshipPhase3 from "../../assets/images/spaceshipPhase3.svg";
import aviPic from "../../assets/images/aviPic.png";
import lijsPic from "../../assets/images/lijsPic.png";
import bpgPic from "../../assets/images/bpgPic.png";

export interface ExperienceSectionProps {}

const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  return (
    <ExperienceSectionWrapper>
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
      <ExperienceCard3>
        <ExperienceCardPic src={aviPic} alt="AVI pic" />
        <ExperienceCardContentSection>
          <ContentSectionHeader>
            Applied Visions:{" "}
            <ColorUnderline>Front End Engineer/Manager</ColorUnderline>
          </ContentSectionHeader>
          <LessonsLearnedHeader>Lessons Learned:</LessonsLearnedHeader>
          <LessonsLearnedCopy>
            Bootstrapping, trade-offs, pivoting, leading by mentoring and
            delegating
          </LessonsLearnedCopy>
          <ConceptsHeader>Concepts:</ConceptsHeader>
          <ConceptsCopy>
            Javascript, React, GraphQL, CSS Grid, reusability systems
          </ConceptsCopy>
        </ExperienceCardContentSection>
      </ExperienceCard3>
      <ExperienceCard2>
        <ExperienceCardPic src={lijsPic} alt="LIJS pic" />
        <ExperienceCardContentSection>
          <ContentSectionHeader>
            Long Island JavaScript Meetup:{" "}
            <ColorUnderline>Co-organizer</ColorUnderline>
            <LessonsLearnedHeader>Lessons Learned:</LessonsLearnedHeader>
            <ConceptsHeader>Concepts:</ConceptsHeader>
          </ContentSectionHeader>
        </ExperienceCardContentSection>
      </ExperienceCard2>
      <ExperienceCard1>
        <ExperienceCardPic src={bpgPic} alt="BPG pic" />
        <ExperienceCardContentSection>
          <ContentSectionHeader>
            Bethpage Credit Union:{" "}
            <ColorUnderline>IT Analyst/Team Lead</ColorUnderline>
          </ContentSectionHeader>
          <LessonsLearnedHeader>Lessons Learned:</LessonsLearnedHeader>
          <LessonsLearnedCopy>
            Project ownership, mentoring, leading by doing, getting unstuck,
            troubleshooting under pressure
          </LessonsLearnedCopy>
          <ConceptsHeader>Concepts:</ConceptsHeader>
          <ConceptsCopy>
            Agile, infosec, networking, project lifecycle management
          </ConceptsCopy>
        </ExperienceCardContentSection>
      </ExperienceCard1>
    </ExperienceSectionWrapper>
  );
};

export default ExperienceSection;

const ExperienceSectionWrapper = styled.section`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr;
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

// Spaceship graphics
const SpaceshipSequence = styled.img``;

const SpaceshipSequenceWrapper3 = styled(SpaceshipSequenceWrapper)`
  grid-area: 1 / 4 / 2 / 5;
`;

const SpaceshipSequenceWrapper2 = styled(SpaceshipSequenceWrapper)`
  grid-area: 3 / 4 / 4 / 5;
`;

const SpaceshipSequenceWrapper1 = styled(SpaceshipSequenceWrapper)`
  grid-area: 5 / 4 / 6 / 5;
`;

// Experience cards
const ExperienceCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 400px;
  background-color: #fff;
  border-radius: 8px;
`;

const ExperienceCard3 = styled(ExperienceCard)`
  grid-area: 1 / 2 / 2 / 3;
  box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.6);
`;

const ExperienceCard2 = styled(ExperienceCard)`
  grid-area: 3 / 2 / 4 / 3;
  box-shadow: 0px 4px 20px rgba(225, 108, 10, 0.6);
`;

const ExperienceCard1 = styled(ExperienceCard)`
  grid-area: 5 / 2 / 6 / 3;
  box-shadow: 0px 4px 20px rgba(3, 188, 176, 0.6);
`;

const ExperienceCardPic = styled.img`
  border: 2px solid #aaffce;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  height: 100%;
  border-radius: 12px;
`;

const ExperienceCardContentSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
`;

const ContentSectionHeader = styled.h3`
  margin-bottom: 0.25rem;
`;

const LessonsLearnedHeader = styled.h4`
  margin-bottom: 10px;
`;

const LessonsLearnedCopy = styled.p`
  margin: 0;
`;

const ConceptsHeader = styled.h4`
  margin-bottom: 10px;
`;

const ConceptsCopy = styled.p`
  margin: 0;
`;
