import React from "react";

import ProjectCard from "./ProjectCard";

import "../styles/Projects.css";

import testPhoto from "../assets/wing.jpg";

const projectsData = [
  {
    projectId: 1,
    headline: "Project Manager for IBM's Christmas marketing campaign",
    subheader: "Increased conversion rates by 27%",
    photo: testPhoto,
  },
  {
    projectId: 2,
    headline: "Created my own website called Connectory",
    subheader: "An incredible work of art that took the world by storm",
    photo: testPhoto,
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      {projectsData.map((obj) => (
        <ProjectCard data={obj} key={obj.projectId} />
      ))}
    </div>
  );
}
