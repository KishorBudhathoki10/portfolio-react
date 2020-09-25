import React from "react";

import classes from "./Projects.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <div className={classes.Projects}>
      <div className={classes.header}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#c5124c"
            fillOpacity="1"
            d="M0,224L48,240C96,256,192,288,288,272C384,256,480,192,576,154.7C672,117,768,107,864,106.7C960,107,1056,117,1152,149.3C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className={classes.main}>
        <h2 className={classes.main__titile}>My Projects</h2>

        <div className={classes.main__projects}>
          <ProjectCard
            imageUrl="./images/projects/gallery.png"
            title="HELENA'S PHOTO GALLERY"
            siteUrl="https://helenasphotogallery.netlify.app/#/"
            githubUrl="https://github.com/KishorBudhathoki10/Gallery"
          />

          <ProjectCard
            imageUrl="./images/projects/gallery-shop.png"
            title="HELENA'S GALLERY SHOP"
            siteUrl="https://shophelenasphotogallery.netlify.app/#/"
            githubUrl="https://github.com/KishorBudhathoki10/Gallery-Shop"
          />

          <ProjectCard
            imageUrl="./images/projects/studentProfileTracker.png"
            title="STUDENT PROFILE TRACKER"
            siteUrl="http://studentprofiletracker.herokuapp.com/"
            githubUrl="https://github.com/KishorBudhathoki10/Students-Grade-Tracker-App"
          />

          <ProjectCard
            imageUrl="./images/projects/bookViewer.png"
            title="BOOK VIEWER"
            siteUrl="http://kishor-book-viewer.herokuapp.com/"
            githubUrl="https://github.com/KishorBudhathoki10/Book_Viewer_App"
          />

          <ProjectCard
            imageUrl="./images/projects/todoList.png"
            title="TODO TRACKER"
            siteUrl="https://kishor-todos-app-with-database.herokuapp.com/lists"
            githubUrl="https://github.com/KishorBudhathoki10/TODO_APP"
          />
        </div>
      </div>

      <div className={classes.footer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#c5124c"
            fillOpacity="1"
            d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,122.7C672,128,768,192,864,213.3C960,235,1056,213,1152,202.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Projects;
