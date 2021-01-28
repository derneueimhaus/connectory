import React from "react";

import ProjectCard from "./ProjectCard";

import "../styles/Projects.css";

export default function Projects({ data }) {
  return (
    <div className="projects-container">
      {data.map((obj) => (
        <ProjectCard data={obj} key={obj.projectId} />
      ))}
    </div>
  );
}
