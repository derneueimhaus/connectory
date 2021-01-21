import React from "react";
import { connect } from "react-redux";
import ProjectsSettingsUnit from "./ProjectsSettingsUnit";

export const ProjectsSettingsList = (props) => {
  return (
    <div>
      <h4>Project 1</h4>
      <ProjectsSettingsUnit index={0} />
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ProjectsSettingsList);
