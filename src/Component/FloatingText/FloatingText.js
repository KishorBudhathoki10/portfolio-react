import React from "react";
import { useSpring, animated } from "react-spring";
// import range from "lodash-es/range";
import classes from "./FloatingText.module.css";

const title = "FULL STACK DEVELOPER";

const words = title.split(" ");

const interp = (i) => (r) =>
  `translate3d(0, ${8 * Math.sin(r + (i * 2 * Math.PI) / 1.2)}px, 0)`;

export default function FloatingText() {
  const { radians } = useSpring({
    to: async (next) => {
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 4000 },
    reset: true,
  });
  return (
    <div className={classes.FloatingName}>
      {words.map((word) => {
        return (
          <div key={word} className={classes.FloatingName__section}>
            {word.split("").map((letter, i) => (
              <animated.div
                key={i}
                className={
                  letter === " " ? classes.spaceDiv : classes.scriptBfBox
                }
                style={{ transform: radians.interpolate(interp(i)) }}
              >
                {letter}
              </animated.div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
