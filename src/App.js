import React, { useEffect, useRef } from "react";
import { animateScroll as scroll } from "react-scroll";

import Home from "./Routes/Home/Home";
import WaterName from "./Component/WateryName/WateryName";
import AboutMe from "./Routes/AboutMe/AboutMe";
import NavBar from "./Component/NavBar/NavBar";
import Projects from "./Routes/Projects/Projects";
import ContactMe from "./Routes/ContactMe/ContactMe";
import classes from "./App.module.css";

const App = () => {
  const container = useRef();

  useEffect(() => {
    const clientHeight = window.outerHeight;

    setTimeout(() => {
      if (window.scrollY < clientHeight) {
        scroll.scrollTo(clientHeight);
      }
    }, 3800);
  }, []);

  return (
    <div>
      <div className={classes.App} ref={container}>
        <NavBar />

        <WaterName />

        <div className={classes.section} id="Home">
          <Home />
        </div>

        <div className={classes.fillerPink}></div>

        <div className={classes.section} id="projects">
          <Projects />
        </div>

        <div className={classes.section} id="about">
          <AboutMe />
        </div>

        <div className={classes.fillerWhite}></div>

        <div className={classes.section} id="contact">
          <ContactMe />
        </div>
      </div>
    </div>
  );
};

export default App;
