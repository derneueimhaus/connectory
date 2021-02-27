import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { editProfileData } from "../redux/actions/profileSettingsActions";

import AddProject from "./AddProject";
import ProjectsSettingsUnit from "./ProjectsSettingsUnit";
import SaveSettings from "./SaveSettings";

function ProjectsSettingsList(props) {
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [projects, setProjects] = useState(props.profileData.projects);

  useEffect(() => {
    const selectedProjects = projects
      .filter(({ show }) => show)
      .map(({ projectId }) => projectId);
    setSelectedProjects(selectedProjects);
  }, [projects]);

  const handleCheckboxChange = (show, projectId) => {
    const updatedProjects = projects.map((project) => {
      if (project.projectId === projectId) {
        return {
          ...project,
          show,
        };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <div>
      <SaveSettings objKey="projects" />
      {props.addProject.show && <AddProject />}
      <p>You can add a maximum of two testimonials to your profile page.</p>
      {props.profileData.projects.map((project, i) => {
        const isSelected = selectedProjects.includes(project.projectId);
        const isDisabled = !isSelected && selectedProjects.length === 2;
        return (
          <ProjectsSettingsUnit
            data={project}
            index={i}
            key={project.projectId}
            isSelected={isSelected}
            isDisabled={isDisabled}
            handleCheckboxChange={handleCheckboxChange}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  addProject: state.addProject,
  profileData: state.profileSettings.profileData,
});

const mapActionsToProps = (dispatch) => ({
  editProfileData: (text) => dispatch(editProfileData(text)),
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ProjectsSettingsList);
