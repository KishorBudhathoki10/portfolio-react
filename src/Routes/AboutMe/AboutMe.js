import React from "react";

import classes from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={classes.AboutMe}>
      <div className={classes.header}>
        <h2>About Me</h2>
      </div>

      <div className={classes.main}>
        <div className={classes.container}>
          <div className={classes.imageContainer}>
            <div
              className={classes.image}
              style={{ backgroundImage: `url("./images/profile/Kishor.jpg")` }}
            ></div>
          </div>

          <div className={classes.overview}>
            <div>
              <h3>Hello,</h3>
              {/* My name is Kishor. I am currently living in Barcelona. Having over 3 years of coding experience, I have developed abilities that allows me to work both on frontend and backend technologies. I have dedicated my time on gaining proficiency on all the different areas of web development in order to better my self as a Web Developer and problem solver. */}

              <p>
                My name is Kishor. I am currently living in Barcelona. Having
                almost 3 years of coding experience, I have dedicated my time to
                gaining proficiency in all the different areas of web
                development in order to better myself as a developer and problem
                solver. Having said that, I am very comfortable using both
                frontend and backend technologies.
              </p>
            </div>
          </div>

          <div className={classes.competencies}>
            <h2>COMPETENCIES</h2>
            <div className={classes.competencies__group}>
              <h5>BACKEND:</h5>
              <p>
                NodeJS, Express, Ruby, Ruby On Rails, MongoDB, PostgreSQL,
                MySQL, Linux, REST, Postman, Sinatra
              </p>
            </div>

            <div className={classes.competencies__group}>
              <h5>FRONTEND:</h5>
              <p>HTML, CSS3, Javascript, React, MaterialUI, JSX, JSON, SASS</p>
            </div>

            <div className={classes.competencies__group}>
              <h5>OTHER:</h5>
              <p>Github, Git</p>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.footer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,229.3C96,235,192,245,288,250.7C384,256,480,256,576,229.3C672,203,768,149,864,160C960,171,1056,245,1152,234.7C1248,224,1344,128,1392,80L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default AboutMe;
