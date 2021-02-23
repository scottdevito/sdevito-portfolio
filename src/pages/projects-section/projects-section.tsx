import * as React from "react";
import styled from "styled-components";
import squiggleLeft from "../../assets/images/squiggleLeft.svg";
import squiggleRight from "../../assets/images/squiggleRight.svg";

export interface ProjectsSectionProps {}

const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  return (
    <ProjectsSectionWrapper>
      <SquiggleLeftImg src={squiggleLeft} alt="left squiggle graphic" />
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
`;

const SquiggleLeftImg = styled.img`
  width: 25%;
  z-index: 2;
`;

const SquiggleRightImg = styled.img`
  width: 25%;
  z-index: 2;
  margin-top: 10%;
`;
