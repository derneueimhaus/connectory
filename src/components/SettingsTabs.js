import React, { useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ProfileSettings } from "./ProfileSettings";
import TestimonialsSettingsList from "./TestimonialsSettingsList";

export default function AccountTabs() {
  const [projects, setProjects] = useState(false);

  return (
    <Tabs>
      <TabList>
        <Tab>Profile</Tab>
        <Tab>Testimonials</Tab>
        <Tab>Projects</Tab>
        <Tab>Account</Tab>
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
      </TabPanel>
      <TabPanel>
        <h2>This is the account settings page</h2>
      </TabPanel>
    </Tabs>
  );
}
