import * as React from "react";
import styled from "styled-components";
import { colors, ColorUnderline } from "../../styles/global-styles";
import spaceshipPhase1 from "../../assets/images/spaceshipPhase1.svg";
import spaceshipPhase2 from "../../assets/images/spaceshipPhase2.svg";
import spaceshipPhase3 from "../../assets/images/spaceshipPhase3.svg";
import aviPic from "../../assets/images/aviPic.png";
import lijsPic from "../../assets/images/lijsPic.png";
import bpgPic from "../../assets/images/bpgPic.png";
import arrowDown from "../../assets/icons/ArrowDown.svg";
import northportBg from "../../assets/images/northportBG.png";
import aviLogo from "../../assets/images/aviLogo.png";
import lijsLogo from "../../assets/images/lijsLogo.png";
import bpgLogo from "../../assets/images/bpgLogo.png";

export interface ExperienceSectionProps {}

const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  const [companyHoverCardActive, setCompanyHoverCardActive] = React.useState<{
    [id: number]: boolean;
  }>({
    0: false,
    1: false,
    2: false,
  });

  const handleCompanyMouseOver = (companyInfoId: number) => {
    const newHoverState = {
      ...companyHoverCardActive,
      [companyInfoId]: true,
    };
    setCompanyHoverCardActive(newHoverState);
  };

  const handleCompanyMouseLeave = (companyInfoId: number) => {
    const newHoverState = {
      ...companyHoverCardActive,
      [companyInfoId]: false,
    };
    setCompanyHoverCardActive(newHoverState);
  };

  return (
    <ExperienceSectionWrapper>
      <ExperienceCard3>
        <ExperienceCardPic src={aviPic} alt="AVI pic" />
        <ExperienceCardContentSection>
          <ContentSectionHeader
            onMouseOver={(): void => handleCompanyMouseOver(0)}
            onMouseLeave={(): void => handleCompanyMouseLeave(0)}
          >
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
        {companyHoverCardActive[0] ? (
          <CompanyHoverCardBGAccent>
            <CompanyHoverCard>
              <CompanyHoverCardLogoWrapper>
                <CompanyHoverCardLogo src={aviLogo} alt="AVI Logo" />
              </CompanyHoverCardLogoWrapper>
              <CompanyHoverCardCopy>
                Located in Northport, NY,{" "}
                <span style={{ color: "#0048CF", fontWeight: "bold" }}>
                  Applied Visions Inc.
                </span>{" "}
                is a software development company focused on creating innovative
                solutions in cyber security, business systems, and command and
                control systems for government and commercial customers
                worldwide.
              </CompanyHoverCardCopy>
            </CompanyHoverCard>
          </CompanyHoverCardBGAccent>
        ) : null}
      </ExperienceCard3>
      <SpaceshipSequenceWrapper3>
        <SpaceshipSequence
          src={spaceshipPhase3}
          alt="Space ship launch phase 3"
        />
      </SpaceshipSequenceWrapper3>
      <ExperienceCard2>
        <ExperienceCardPic src={lijsPic} alt="LIJS pic" />
        <ExperienceCardContentSection>
          <ContentSectionHeader
            onMouseOver={(): void => handleCompanyMouseOver(1)}
            onMouseLeave={(): void => handleCompanyMouseLeave(1)}
          >
            Long Island JavaScript Meetup:{" "}
            <ColorUnderline>Co-organizer</ColorUnderline>
          </ContentSectionHeader>
          <LessonsLearnedHeader>Lessons Learned:</LessonsLearnedHeader>
          <LessonsLearnedCopy>
            Community organization, presentation planning and the importance of
            plan b's (and c's), advertising
          </LessonsLearnedCopy>
          <ConceptsHeader>Concepts:</ConceptsHeader>
          <ConceptsCopy>
            Teaching, mentoring, public speaking, Javascript fundamentals,
            React, GraphQL, blockchain
          </ConceptsCopy>
        </ExperienceCardContentSection>
        {companyHoverCardActive[1] ? (
          <CompanyHoverCardBGAccent>
            <CompanyHoverCard>
              <CompanyHoverCardLogoWrapper>
                <CompanyHoverCardLogo src={lijsLogo} alt="LIJS Logo" />
              </CompanyHoverCardLogoWrapper>
              <CompanyHoverCardCopy>
                Located in Huntington, NY,{" "}
                <span style={{ color: "#0048CF", fontWeight: "bold" }}>
                  Long Island JavaScript
                </span>{" "}
                is a group of 550+ JavaScript Developers in the Long Island, NY
                area. We meet on the last Wednesday of each month, where we
                discuss a range of topics around the JavaScript ecosystem.
              </CompanyHoverCardCopy>
            </CompanyHoverCard>
          </CompanyHoverCardBGAccent>
        ) : null}
      </ExperienceCard2>
      <SpaceshipSequenceWrapper2>
        <SpaceshipSequence
          src={spaceshipPhase2}
          alt="Space ship launch phase 2"
        />
      </SpaceshipSequenceWrapper2>
      <ExperienceCard1>
        <ExperienceCardPic src={bpgPic} alt="BPG pic" />
        <ExperienceCardContentSection>
          <ContentSectionHeader
            onMouseOver={(): void => handleCompanyMouseOver(2)}
            onMouseLeave={(): void => handleCompanyMouseLeave(2)}
          >
            Bethpage Credit Union:{" "}
            <ColorUnderline>IT Analyst/Team Lead</ColorUnderline>
          </ContentSectionHeader>
          <LessonsLearnedHeader>Lessons Learned:</LessonsLearnedHeader>
          <LessonsLearnedCopy>
            Project ownership, getting unstuck, leading by doing,
            troubleshooting under pressure
          </LessonsLearnedCopy>
          <ConceptsHeader>Concepts:</ConceptsHeader>
          <ConceptsCopy>Agile, InfoSec, networking</ConceptsCopy>
        </ExperienceCardContentSection>
        {companyHoverCardActive[2] ? (
          <CompanyHoverCardBGAccent>
            <CompanyHoverCard>
              <CompanyHoverCardLogoWrapper>
                <CompanyHoverCardLogo src={bpgLogo} alt="BPG Logo" />
              </CompanyHoverCardLogoWrapper>
              <CompanyHoverCardCopy>
                Located in Bethpage, NY,{" "}
                <span style={{ color: "#0048CF", fontWeight: "bold" }}>
                  Bethpage Federal Credit Union
                </span>{" "}
                is a not for profit organization that provides banking services
                to its members. Named the largest credit union of the Northeast
                in 2003, they've expanded to a national charter and now do
                business across the continental US.
              </CompanyHoverCardCopy>
            </CompanyHoverCard>
          </CompanyHoverCardBGAccent>
        ) : null}
      </ExperienceCard1>
      <SpaceshipSequenceWrapper1>
        <SpaceshipSequence
          src={spaceshipPhase1}
          alt="Space ship launch phase 1"
        />
      </SpaceshipSequenceWrapper1>
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

  @media (max-width: 1150px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-bottom: 10vh;
    min-height: 300vh;
  }
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
  position: relative;

  @media (max-width: 2000px) {
    width: 100%;
  }

  @media (max-width: 1150px) {
    width: 80%;
  }
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

  &:hover {
    cursor: default;
  }
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

const CompanyHoverCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #e6e8ec;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 3px solid #000;
  transform: translate(-20px, -20px);
  background-image: url(${northportBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.2s ease-in-out all;

  &::after {
    content: "";
    background-image: url(${arrowDown});
    background-position: center;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: -28px;
    right: 0;
  }
`;

const CompanyHoverCardCopy = styled.p`
  flex: 1;
  margin-right: 20px;
`;

const CompanyHoverCardLogo = styled.img``;

const CompanyHoverCardLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const CompanyHoverCardBGAccent = styled.div`
  position: absolute;
  top: -235px;
  right: 0;
  width: 700px;
  height: 200px;
  background-color: #ffcece;
  transform: translate(20px, 20px);
  overflow: visible;

  @media (max-width: 750px) {
    display: none;
  }
`;
