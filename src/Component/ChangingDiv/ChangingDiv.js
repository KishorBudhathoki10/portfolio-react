import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";

import classes from "./ChangingDiv.module.css";
import FloatingName from "../FloatingText/FloatingText";

function ChangingDiv() {
  const props = useSpring({
    from: {
      left: "0%",
      top: "0%",
      width: "0%",
      height: "0%",
      background: "#c5124c",
    },
    to: async (next) => {
      while (1) {
        await next({
          left: "0%",
          top: "0%",
          width: "100%",
          height: "100%",
          background: "#c5124c",
        });
        await next({ height: "50%", background: "#16181d" });
        await next({
          width: "50%",
          left: "50%",
          background: "#c5124c",
        });
        await next({ top: "0%", height: "100%", background: "#16181d" });
        await next({ top: "50%", height: "50%", background: "#c5124c" });
        await next({ width: "100%", left: "0%", background: "#16181d" });
        await next({ width: "50%", background: "#c5124c" });
        await next({ top: "0%", height: "100%", background: "#16181d" });
        await next({ width: "100%", background: "#c5124c" });
      }
    },
  });
  return (
    <div className={classes.ChangingDiv}>
      <div className={classes.FloatingName}>
        <div className={classes.imageContainer}>
          <div
            className={classes.image}
            style={{ backgroundImage: `url("./images/profile/Kishor.jpg")` }}
          ></div>
        </div>
        <div className={classes.FloatingName__title}>
          <h1>I am a</h1>
        </div>
        <FloatingName />

        <div className={classes.links}>
          <Link
            activeClass={classes.active}
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            PROJECTS
          </Link>
          <span> / </span>
          <Link
            activeClass={classes.active}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            ABOUT
          </Link>
          <span> / </span>
          <Link
            activeClass={classes.active}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            CONTACT
          </Link>
        </div>
      </div>
      <animated.div className={classes.scriptBox} style={props}></animated.div>
    </div>
  );
}

export default ChangingDiv;
