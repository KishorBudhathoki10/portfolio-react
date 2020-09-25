import React from "react";
import { useSpring, animated } from "react-spring";

import classes from "./ChangingDiv.module.css";

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
    <animated.div className={classes.scriptBox} style={props}></animated.div>
  );
}

export default ChangingDiv;
