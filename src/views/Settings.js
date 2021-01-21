import React, { Component } from "react";
import SettingsTabs from "../components/SettingsTabs";

export default class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "profile",
    };
  }

  handleTabChange = () => {};

  render() {
    return (
      <div>
        <h4>This is the Settings page</h4>
        <SettingsTabs />
      </div>
    );
  }
}
