import React from "react";
import styled from "styled-components";

import AppHeader from "./components/app-header";
import LandingSection from "./pages/landing-section/landing-section";

function App() {
  return (
    <AppWrapper className="App">
      <AppHeader />
      <main style={{ width: "100%" }}>
        <LandingSection />
      </main>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
