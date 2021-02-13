import React, { useState } from "react";

import { connect } from "react-redux";
import { toggleAddMode } from "../redux/actions/projectActions";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import ProfileSettings from "./ProfileSettings";
import ProjectsSettingsList from "./ProjectsSettingsList";
import TestimonialsSettingsList from "./TestimonialsSettingsList";

function SettingsTabs(props) {
  const [projects, setProjects] = useState(false);

  return (
    <Tabs>
      <TabList>
        <Tab onClick={() => setProjects(false)}>Profile</Tab>
        <Tab onClick={() => setProjects(false)}>Testimonials</Tab>
        <Tab onClick={() => setProjects(true)}>Projects</Tab>
        <Tab onClick={() => setProjects(false)}>Account</Tab>
      </TabList>
      {projects && (
        <button onClick={() => props.toggleAddMode(!props.addProject.show)}>
          {props.addProject.show ? "Hide Project Creator" : "Add Project"}
        </button>
      )}

      <TabPanel>
        <ProfileSettings />
      </TabPanel>
      <TabPanel>
        <TestimonialsSettingsList
          testimonialsData={props.profileData.testimonials}
        />
      </TabPanel>
      <TabPanel>
        <ProjectsSettingsList />
      </TabPanel>
      <TabPanel>
        <h2>This is the account settings page</h2>
      </TabPanel>
    </Tabs>
  );
}

const mapStateToProps = (state) => ({
  addProject: state.addProject,
  profileData: state.profileSettings.profileData,
});

const mapActionsToProps = { toggleAddMode };

export default connect(mapStateToProps, mapActionsToProps)(SettingsTabs);
