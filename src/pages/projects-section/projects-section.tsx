import * as React from "react";
import styled from "styled-components";
import squiggleLeft from "../../assets/images/squiggleLeft.svg";
import squiggleRight from "../../assets/images/squiggleRight.svg";
import { ColorUnderline } from "../../styles/global-styles";
import CyberSecLearningPlatformPreview from "../../assets/images/cyberSecLearningPlatformPreview.svg";
import FacilityManagementWebAppPreview from "../../assets/images/facilityManagementWebAppPreview.svg";

export interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  return (
    <ProjectsSectionWrapper>
      <SquiggleLeftImg src={squiggleLeft} alt="left squiggle graphic" />
      <ProjectsWrapper>
        <Project1>
          <ProjectHeader>
            Facility Management Web App:{" "}
            <ColorUnderline>TS/React/GQL</ColorUnderline>
          </ProjectHeader>
          <ProjectCopy>
            Here’s some great realestate to explain the high-level details. This
            could be a combination of technologies, skillset, and creativity
            you’re able to showcase.
          </ProjectCopy>
          <ProjectImg
            src={FacilityManagementWebAppPreview}
            alt="First project image"
          />
        </Project1>
        <Project2>
          <ProjectHeader>
            Cyber Security Learning Platform:{" "}
            <ColorUnderline>JS/HTML/CSS</ColorUnderline>
          </ProjectHeader>
          <ProjectCopy>
            Here’s some great realestate to explain the high-level details. This
            could be a combination of technologies, skillset, and creativity
            you’re able to showcase.
          </ProjectCopy>
          <ProjectImg
            src={CyberSecLearningPlatformPreview}
            alt="Second project image"
          />
        </Project2>
        <Project3>
          <ProjectHeader>
            Emergency Vehicle Energy Management Web App:{" "}
            <ColorUnderline>PHP/JS</ColorUnderline>
          </ProjectHeader>
          <ProjectCopy>
            Here’s some great realestate to explain the high-level details. This
            could be a combination of technologies, skillset, and creativity
            you’re able to showcase.
          </ProjectCopy>
          <ProjectImg
            src={FacilityManagementWebAppPreview}
            alt="Third project image"
          />
        </Project3>
      </ProjectsWrapper>
      <SquiggleRightImg src={squiggleRight} alt="right squiggle graphic" />
    </ProjectsSectionWrapper>
  );
};

export default ProjectsSection;

const ProjectsSectionWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  min-height: 165vh;
  z-index: 2;
  position: relative;
  margin-bottom: 26rem;
`;

const SquiggleLeftImg = styled.img`
  width: 25%;
  flex-grow: 1;
  z-index: 2;
`;

const SquiggleRightImg = styled.img`
  width: 25%;
  flex-grow: 1;
  z-index: 2;
  margin-top: 15%;

  @media (min-width: 2000px) {
    margin-top: 8%;
  }

  @media (min-width: 3000px) {
    margin-top: 3%;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 20;
  height: 160vh;
  margin-bottom: 15rem;
  margin-top: 7rem;
`;

const Project = styled.div`
  min-height: 160px;
  min-width: 70%;
  max-width: 30%;
`;

const Project1 = styled(Project)`
  transform: translate(2vw, 20vh);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

const Project2 = styled(Project)`
  transform: translate(-7vw, 40vh);
`;

const Project3 = styled(Project)`
  transform: translate(10vw, 58vh);
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;

const ProjectHeader = styled.h3``;

const ProjectCopy = styled.p`
  max-width: 95%;
`;

const ProjectImg = styled.img`
  margin-top: 1em;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
`;
