import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import classes from "./NavBarIcon.module.css";

function NavBarIcon() {
  const [navColor, setNavColor] = useState("white");

  useEffect(() => {
    const changingColorPoint = window.innerHeight - 30;

    const changeColorAccrodingly = () => {
      if (window.scrollY >= changingColorPoint * 2) {
        setNavColor("black");
      } else if (window.scrollY >= changingColorPoint) {
        setNavColor("#c5124c");
      } else {
        setNavColor("white");
      }
    };

    window.addEventListener("scroll", changeColorAccrodingly);

    return () => {
      window.removeEventListener("scroll", changeColorAccrodingly);
    };
  }, []);

  const { scale, transform, opacity } = useSpring({
    from: {
      scale: 10,
      opacity: 0,
      transform: "scale(0.8)",
    },
    to: {
      scale: 150,
      opacity: 1,
      transform: "scale(1)",
    },
    delay: 3000,
    config: { duration: 500 },
  });

  const styleLines = { backgroundColor: navColor };

  return (
    <animated.div style={{ transform, opacity, scale }}>
      <div className={classes.line1} style={styleLines}></div>
      <div className={classes.line2} style={styleLines}></div>
      <div className={classes.line3} style={styleLines}></div>
    </animated.div>
  );
}

export default NavBarIcon;
