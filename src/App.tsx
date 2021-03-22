import React from "react";
import styled from "styled-components";

import AppHeader from "./components/app-header";
import ContactSection from "./pages/contact-section/contact-section";
import ExperienceSection from "./pages/experience-section/experience-section";
import LandingSection from "./pages/landing-section/landing-section";
import ProjectsSection from "./pages/projects-section/projects-section";

function App() {
  return (
    <AppWrapper className="App">
      <AppHeader />
      <main style={{ width: "100%", height: "100%" }}>
        <LandingSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
