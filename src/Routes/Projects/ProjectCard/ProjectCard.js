import React, { useState } from "react";

import classes from "./ProjectCard.module.css";
import Backdrop from "../../../Component/Backdrop/Backdrop";

const ProjectCard = ({
  imageUrl,
  title,
  siteUrl,
  githubUrl,
  testingUser,
  testingPassword,
}) => {
  const [showBackdrop, setShowBackdrop] = useState(false);

  const showBackdropAccordingly = () => {
    if (showBackdrop) {
      return (
        <Backdrop>
          <div className={classes.learnMore}>
            <a href={siteUrl} target="_blank" rel="noopener noreferrer">
              VIEW SITE
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              VIEW CODE
            </a>
          </div>

          {showTestingAccountAccordingly()}
        </Backdrop>
      );
    }
  };

  const showTestingAccountAccordingly = () => {
    if (testingUser && testingPassword) {
      return (
        <div className={classes.testing}>
          <p>
            <span>Email: </span>
            {testingUser}
          </p>
          <p>
            <span>Password: </span>
            {testingPassword}
          </p>
        </div>
      );
    }
  };

  return (
    <div
      className={classes.main__project}
      onMouseEnter={() => setShowBackdrop(true)}
      onMouseLeave={() => setShowBackdrop(false)}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {showBackdropAccordingly()}
      </div>

      <h2 className={classes.main__project_title}>{title}</h2>
    </div>
  );
};

export default ProjectCard;
