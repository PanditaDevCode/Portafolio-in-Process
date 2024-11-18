import React, { useEffect } from "react";
import { initCarousel } from "../utils/ProjectCarousel";
import { initMenu } from "../utils/HamburgerMenu";
import { initMain } from "../utils/MainAnimations";
import Navbar from "../components/navbar";
import HamburgerMenu from "../components/HamburgerMenu";
import InfoMe from "../components/InfoMe";
import AboutMe from "../components/AboutMe";
import ProjectCarousel from "../components/ProjectCarousel";

const HomePage = () => {
  useEffect(() => {
    initCarousel();
    initMenu();
    initMain();
  }, []);

  return (
    <div className="container-global">
      <Navbar />
      <HamburgerMenu />
      <InfoMe />
      <AboutMe />
      <ProjectCarousel />
    </div>
  );
};

export default HomePage;