import React from "react";

import ProjectCard from "./ProjectCard";

import "../styles/Projects.css";

import testPhoto from "../assets/wing.jpg";

const projectsData = [
  {
    projectId: 1,
    headline: "Project Manager for IBM's Christmas marketing campaign",
    subheader: "Increased conversion rates by 27%",
    description:
      "2nd Edition: Shaping the recovery. On 11–13 November, after the US presidential elections, the Financial Times, in partnership with TNW, gather the most senior global decision makers and leading minds in policy, business, tech and finance for three days of online conversations with top FT journalists. (198 kB)",
    photo: testPhoto,
  },
  {
    projectId: 2,
    headline: "Created my own website called Connectory",
    subheader: "An incredible work of art that took the world by storm",
    description:
      "2nd Edition: Shaping the recovery. On 11–13 November, after the US presidential elections, the Financial Times, in partnership with TNW, gather the most senior global decision makers and leading minds in policy, business, tech and finance for three days of online conversations with top FT journalists. (198 kB)",
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
