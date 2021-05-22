import * as React from "react";
import styled from "styled-components";
import squiggleLeft from "../../assets/images/squiggleLeft.svg";
import squiggleRight from "../../assets/images/squiggleRight.svg";
import { ColorUnderline } from "../../styles/global-styles";
import CyberSecLearningPlatformPreview from "../../assets/images/cyberSecLearningPlatformPreview.svg";
import FacilityManagementWebAppPreview from "../../assets/images/facilityManagementWebAppPreview.svg";
import EmergencyVehEnergyManWebAppPreview from "../../assets/images/emergencyVehEnergyManWebAppPreview.svg";
import InsuranceWebAppPreview from "../../assets/images/insuranceWebAppPreview.svg";

export interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  return (
    <ProjectsSectionWrapper id="projects">
      <SquiggleLeftImg src={squiggleLeft} alt="left squiggle graphic" />
      <ProjectsWrapper>
        <Project1>
          <ProjectHeader>
            Facility Management Web App:{" "}
            <ColorUnderline>TS/React/GQL</ColorUnderline>
          </ProjectHeader>
          <ProjectCopy>
            A robust web app with a microservices architecture built to enable
            clients to manage complex facilities anywhere in the world.
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
            A cybersecurity training web app built to support the ongoing
            dissemination of cybersecurity concepts in a mission-critical
            industry.
          </ProjectCopy>
          <ProjectImg
            src={CyberSecLearningPlatformPreview}
            alt="Second project image"
          />
        </Project2>
        <Project3>
          <ProjectHeader>
            Commercial Insurance Management Web App:{" "}
            <ColorUnderline>JS/HTML/CSS/C#</ColorUnderline>
          </ProjectHeader>
          <ProjectCopy>
            A web app that enabled an insurance company to manage the commercial
            real estate insurance process.
          </ProjectCopy>
          <ProjectImg
            src={EmergencyVehEnergyManWebAppPreview}
            alt="Third project image"
          />
        </Project3>
        <Project4>
          <ProjectHeader>
            Emergency Vehicle Energy Management Web App:{" "}
            <ColorUnderline>JS/PHP</ColorUnderline>
          </ProjectHeader>
          <ProjectCopy>
            A web app with microservices architecture that allows companies to
            automatically control the energy usage of their fleets of vehicles.
          </ProjectCopy>
          <ProjectImg src={InsuranceWebAppPreview} alt="Fourth project image" />
        </Project4>
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

  @media (max-width: 1250px) {
    display: none;
    flex-grow: 0;
  }
`;

const SquiggleRightImg = styled.img`
  width: 25%;
  flex-grow: 1;
  z-index: 2;
  margin-top: 15%;

  @media (max-width: 1250px) {
    display: none;
    flex-grow: 0;
  }

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
  height: 230vh;
  margin-bottom: 15rem;
  margin-top: 7rem;

  @media (min-width: 2000px) {
    height: 190vh;
    margin-bottom: 20rem;
  }

  @media (max-width: 1600px) {
    margin-bottom: 24rem;
  }

  @media (max-width: 1250px) {
    margin-top: 0;
    margin-bottom: 24rem;
  }

  @media (max-width: 800px) {
    margin-bottom: 8rem;
  }
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

const Project4 = styled(Project)`
  transform: translate(0vw, 76vh);
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ProjectHeader = styled.h3``;

const ProjectCopy = styled.p`
  max-width: 95%;
  margin-top: 0;
`;

const ProjectImg = styled.img`
  margin-top: 1em;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));

  @media (max-width: 880px) {
    max-width: 100%;
  }
`;
