import React from "react";
import { connect } from "react-redux";
import ProjectsSettingsUnit from "./ProjectsSettingsUnit";

import wingPhoto from "../assets/wing.jpg";

const projectsData = [
  {
    projectId: 1,
    headline: "Project Manager for IBM's Christmas marketing campaign",
    subheader: "Increased conversion rates by 27%",
    description:
      "2nd Edition: Shaping the recovery. On 11–13 November, after the US presidential elections, the Financial Times, in partnership with TNW, gather the most senior global decision makers and leading minds in policy, business, tech and finance for three days of online conversations with top FT journalists. (198 kB)",
    photo: wingPhoto,
  },
  {
    projectId: 2,
    headline: "Created my own website called Connectory",
    subheader: "An incredible work of art that took the world by storm",
    description:
      "2nd Edition: Shaping the recovery. On 11–13 November, after the US presidential elections, the Financial Times, in partnership with TNW, gather the most senior global decision makers and leading minds in policy, business, tech and finance for three days of online conversations with top FT journalists. (198 kB)",
    photo: wingPhoto,
  },
];

export const ProjectsSettingsList = (props) => {
  return (
    <div>
      <h4>Project 1</h4>
      <ProjectsSettingsUnit data={projectsData[0]} index={0} />
      <hr style={{ border: "solid 1px purple" }} />
      <h4>Project 2</h4>
      <ProjectsSettingsUnit data={projectsData[1]} index={1} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ProjectsSettingsList);
