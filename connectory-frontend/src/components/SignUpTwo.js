import React, { Component } from "react";

import { withRouter } from "react-router";

import { connect } from "react-redux";
import {
  editProfession,
  editLocation,
  editDescription,
} from "../redux/actions/profileSettingsActions";
import { editShare } from "../redux/actions/accountSettingsActions";

// import ImageEditor from "../components/ImageEditor";
import CropperWidget from "../components/CropperWidget";

import Switch from "react-switch";

import testPhoto from "../assets/blank.png";

class SignUpTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professions: [],
      locations: [],
      profession: "",
      location: "",
      description: "",
    };
  }

  componentDidMount = () => {
    this.getSettingsData();
  };

  getSettingsData = async () => {
    const settings = await fetch(`http://localhost:8080/settings/1`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    this.setState({
      professions: settings.professions,
      locations: settings.locations,
    });
  };

  handleDropdownChange = (e, key, cb) => {
    cb(e.target.value);
    this.setState({ [key]: e.target.value });
  };

  handleCheckChange = (checked) => {
    this.props.editShare(checked);
  };

  handleSubmitInfo = async (e) => {
    e.preventDefault();
    // await fetch(`http://localhost:8080/profile/1`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     // "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     userInfo: {
    //       description: this.props.profileSettings.description,
    //       location: this.props.profileSettings.location,
    //       profession: this.props.profileSettings.profession,
    //     },
    //     testimonials: {},
    //     projects: [],
    //     experience: [],
    //   }),
    // })
    //   .then((res) => res.json())
    //   .catch((err) => console.log(err));
    this.props.history.push("/");
  };

  handleSkip = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="signup-one-container">
        <div className="signup-page-header">
          <h1>Tell us about you.</h1>
          <h4>FIRST THINGS FIRST: SOME BASIC INFO</h4>
          <CropperWidget userPhoto={testPhoto} />
        </div>
        <div className="signup-form-container">
          <div className="signup-form">
            <form onSubmit={this.handleSubmitInfo}>
              <select
                name="Professions"
                value={this.state.profession}
                onChange={(e) =>
                  this.handleDropdownChange(
                    e,
                    "profession",
                    this.props.editProfession
                  )
                }
              >
                <option value="default">SELECT PROFESSION...</option>
                {this.state.professions.map((profession, i) => (
                  <option key={i} value={profession}>
                    {profession}
                  </option>
                ))}
              </select>
              <select
                name="Locations"
                value={this.state.location}
                onChange={(e) =>
                  this.handleDropdownChange(
                    e,
                    "location",
                    this.props.editLocation
                  )
                }
              >
                <option value="default">SELECT LOCATION...</option>
                {this.state.locations.map((location, i) => (
                  <option key={i} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <label>
                <span>Share your profile with users from other locations</span>
                <Switch
                  onChange={this.handleCheckChange}
                  checked={this.props.accountSettings.share}
                  checkedIcon={false}
                  uncheckedIcon={false}
                />
              </label>
              <label htmlFor="input-description">Description</label>
              <input
                id="input-description"
                className="settings-input input-description"
                type="text"
                placeholder="Give yourself a brief description that will appear at the top of your profile."
                onChange={(e) =>
                  this.handleDropdownChange(
                    e,
                    "description",
                    this.props.editDescription
                  )
                }
              />
              <div>
                <button onClick={this.handleSkip}>Skip</button>
                <input type="submit" value="Connect" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profileSettings: state.profileSettings,
  accountSettings: state.accountSettings,
});

const mapActionsToProps = {
  editProfession,
  editLocation,
  editDescription,
  editShare,
};

export default withRouter(
  connect(mapStateToProps, mapActionsToProps)(SignUpTwo)
);
