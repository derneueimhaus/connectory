import React, { Component } from "react";

import { connect } from "react-redux";

import { loadProfileData } from "../redux/actions/profileSettingsActions";

import SettingsTabs from "../components/SettingsTabs";
import Loading from "../components/Loading";

export class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const profileData = await fetch(
      `http://localhost:8080/profile/${this.props.match.params.userId}`
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    this.props.loadProfileData(profileData);
  };

  render() {
    return this.props.profileData ? (
      <div>
        <h4>This is the Settings page</h4>
        <SettingsTabs profileData={this.props.profileData} />
      </div>
    ) : (
      <Loading />
    );
  }
}

const mapStateToProps = (state) => ({
  profileData: state.profileSettings.profileData,
});

const mapActionsToProps = { loadProfileData };

export default connect(mapStateToProps, mapActionsToProps)(Settings);
