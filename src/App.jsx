import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Gallery2 } from "./components/gallery2";
import { PPOne } from "./components/ppone";
import { Research } from "./components/research";
import { PPtwo } from "./components/pptwo";
import { StatusDocTwo } from "./components/statusdoctwo";
import { FinalReports } from "./components/finalreports";
import { ProjectRegistration } from "./components/projectregistration";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Gallery2 data={landingPageData.Gallery2} />
      <PPOne data={landingPageData.ProgressPresOne} />
      <Research data={landingPageData.ResearchPaper} />
      <PPtwo data={landingPageData.ProgressPresTwo} />
      <StatusDocTwo data={landingPageData.StatusDocTwo} />
      <FinalReports data={landingPageData.FinalReps} />
      <ProjectRegistration data={landingPageData.ProjectRegistration} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
