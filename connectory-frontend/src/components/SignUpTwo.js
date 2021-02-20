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
import CropperModal from "../components/CropperModal";
import CropperWidget from "../components/CropperWidget";

import testPhoto from "../assets/blank.png";

import Switch from "react-switch";

class SignUpTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professions: [],
      locations: [],
      profession: "",
      location: "",
      description: "",
      modalShow: false,
      userPhoto: testPhoto,
    };
  }

  componentDidMount = () => {
    this.getSettingsData();
    this.getProfileData();
  };

  getProfileData = async () => {
    const profileInfo = await fetch(
      `http://localhost:8080/profile/${this.props.id}`
    )
      .then((res) => res.json())
      .catch((err) => console.log(err));
    this.setState({ userInfo: profileInfo.userInfo });
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

  toggleModalShow = (boolean) => {
    this.setState({ modalShow: boolean });
  };

  handleDropdownChange = (e, key, cb) => {
    cb(e.target.value);
    this.setState({ [key]: e.target.value });
  };

  handleCheckChange = (checked) => {
    this.props.editShare(checked);
  };

  handleCropImage = (photo) => {
    this.setState({ userPhoto: photo });
  };

  handleSubmitInfo = async (e) => {
    e.preventDefault();
    const newUserInfo = { ...this.state.userInfo };
    newUserInfo.description = this.props.profileSettings.description;
    newUserInfo.location = this.props.profileSettings.location;
    newUserInfo.profession = this.props.profileSettings.profession;
    newUserInfo.photo = this.state.userPhoto;
    console.log(newUserInfo);
    await fetch(`http://localhost:8080/profile/${this.props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userInfo: newUserInfo,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
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
          <button
            className="button"
            onClick={() => this.toggleModalShow(!this.state.modalShow)}
          >
            Add Profile Picture
          </button>
          <img
            className="settings-profile-img"
            src={this.state.userPhoto}
            alt="Profile"
          />
          {this.state.modalShow && (
            <CropperModal
              toggleModalShow={this.toggleModalShow}
              handleCropImage={this.handleCropImage}
              photo={this.state.userPhoto}
              id={this.props.id}
            />
          )}
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
                  <option key={i} value={profession.key}>
                    {profession.title}
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
                  <option key={i} value={location.key}>
                    {location.title}
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
