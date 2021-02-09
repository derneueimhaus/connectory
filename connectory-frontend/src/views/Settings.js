import React, { Component, useEffect, useState } from "react";

import SettingsTabs from "../components/SettingsTabs";

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
    };
  }

  componentDidMount = async () => {
    const profileData = await fetch(
      `http://localhost:8080/profile/${this.props.match.params.id}`
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    this.setState({ profileData });
  };

  render() {
    return (
      <div>
        <h4>This is the Settings page</h4>
        <SettingsTabs profileData={this.state.profileData} />
      </div>
    );
  }
}
