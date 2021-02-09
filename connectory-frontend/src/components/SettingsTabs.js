import React, { useState } from "react";

import { connect } from "react-redux";
import { toggleAddMode } from "../redux/actions/projectActions";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { ProfileSettings } from "./ProfileSettings";
import ProjectsSettingsList from "./ProjectsSettingsList";
import TestimonialsSettingsList from "./TestimonialsSettingsList";

function SettingsTabs(props) {
  const [projects, setProjects] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSaveChanges = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  return (
    <Tabs>
      <TabList>
        <Tab onClick={() => setProjects(false)}>Profile</Tab>
        <Tab onClick={() => setProjects(false)}>Testimonials</Tab>
        <Tab onClick={() => setProjects(true)}>Projects</Tab>
        <Tab onClick={() => setProjects(false)}>Account</Tab>
      </TabList>
      <div className="saved-container">
        <button onClick={handleSaveChanges}>Save Changes</button>
        {saved && (
          <p className="saved">{`Saved ${String.fromCharCode(10003)}`}</p>
        )}
      </div>
      {projects && (
        <button onClick={() => props.toggleAddMode(!props.addProject.show)}>
          {props.addProject.show ? "Hide Project Creator" : "Add Project"}
        </button>
      )}

      <TabPanel>
        <ProfileSettings profileData={props.profileData} />
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
});

const mapActionsToProps = { toggleAddMode };

export default connect(mapStateToProps, mapActionsToProps)(SettingsTabs);
