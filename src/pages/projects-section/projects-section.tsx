import * as React from "react";
import styled from "styled-components";
import squiggleLeft from "../../assets/images/squiggleLeft.svg";
import squiggleRight from "../../assets/images/squiggleRight.svg";
import { ColorUnderline } from "../../styles/global-styles";

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
          <ProjectCopy>Some copy</ProjectCopy>
          <ProjectImg src={""} alt="First Project Image" />
        </Project1>
        <Project2>
          <ProjectHeader>
            Cyber Security Learning Platform:{" "}
            <ColorUnderline>JS/HTML/CSS</ColorUnderline>
          </ProjectHeader>
        </Project2>
        <Project3>
          <ProjectHeader>
            Emergency Vehicle Efficiency Management Web App:{" "}
            <ColorUnderline>PHP/JS</ColorUnderline>
          </ProjectHeader>
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
  z-index: 2;
  position: relative;
  margin-bottom: 15rem;
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
  margin-top: 10%;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 20;
`;

const Project = styled.div`
  min-height: 200px;
  min-width: 70%;
  max-width: 30%;
  border: 1px solid black;
`;

const Project1 = styled(Project)`
  transform: translate(10vw, 25vh);
  text-align: right;
`;

const Project2 = styled(Project)`
  transform: translate(-10vw, 50vh);
`;

const Project3 = styled(Project)`
  transform: translate(0, 75vh);
  text-align: right;
`;

const ProjectHeader = styled.h3``;

const ProjectCopy = styled.p``;

const ProjectImg = styled.img``;
