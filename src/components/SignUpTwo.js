import React, { Component } from "react";

import { connect } from "react-redux";
import {
  editProfession,
  editLocation,
  editDescription,
} from "../redux/actions/profileSettingsActions";
import { editShare } from "../redux/actions/accountSettingsActions";

import ImageEditor from "../components/ImageEditor";

import Switch from "react-switch";

const professionsArray = ["testA", "testB", "testC", "testD"];

const locationsArray = [
  "Change= ZO",
  "Change= NW",
  "Change= PRO",
  "Change= Alumni",
];

class SignUpTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profession: "",
      location: "",
      description:
        "Give yourself a brief description that will appear at the top of your profile.",
    };
  }

  handleDropdownChange = (e, key, cb) => {
    cb(e.target.value);
    this.setState({ [key]: e.target.value });
  };

  handleCheckChange = (checked) => {
    this.props.editShare(checked);
  };

  render() {
    return (
      <div className="signup-one-container">
        <div className="signup-page-header">
          <h1>Tell us about you.</h1>
          <h4>FIRST THINGS FIRST: SOME BASIC INFO</h4>
          <ImageEditor />
        </div>
        <div className="signup-form-container">
          <div className="signup-form">
            <form>
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
                {professionsArray.map((profession, i) => (
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
                {locationsArray.map((location, i) => (
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
                defaultValue={this.state.description}
                onChange={(e) =>
                  this.handleDropdownChange(
                    e,
                    "description",
                    this.props.editDescription
                  )
                }
              />
              <div>
                <button>Skip</button>
                <button type="submit">Connect</button>
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

export default connect(mapStateToProps, mapActionsToProps)(SignUpTwo);
