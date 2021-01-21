import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import { ProfileSettings } from "./ProfileSettings";
import { ProjectsSettingsList } from "./ProjectsSettingsList";
import TestimonialsSettingsList from "./TestimonialsSettingsList";

export default function SettingsTabs() {
  const [projects, setProjects] = useState(false);

  return (
    <Tabs>
      <TabList>
        <Tab onClick={() => setProjects(false)}>Profile</Tab>
        <Tab onClick={() => setProjects(false)}>Testimonials</Tab>
        <Tab onClick={() => setProjects(true)}>Projects</Tab>
        <Tab onClick={() => setProjects(false)}>Account</Tab>
      </TabList>
      <button>Save Changes</button>
      {projects && <button>Add Project</button>}

      <TabPanel>
        <h2>This is the profile settings page</h2>
        <ProfileSettings />
      </TabPanel>
      <TabPanel>
        <h2>This is the testimonials settings page</h2>
        <TestimonialsSettingsList />
      </TabPanel>
      <TabPanel>
        <h2>This is the projects settings page</h2>
        <ProjectsSettingsList />
      </TabPanel>
      <TabPanel>
        <h2>This is the account settings page</h2>
      </TabPanel>
    </Tabs>
  );
}
