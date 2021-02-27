import React, { Component } from "react";

import { connect } from "react-redux";

import { editProfileData } from "../redux/actions/profileSettingsActions";

import "../styles/Settings.css";

import CropperWidget from "./CropperWidget";
import SaveSettings from "./SaveSettings";

import testPhoto from "../assets/blank.png";

export class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      editMode: false,
      // scale: 1,
      professions: [],
      locations: [],
      profileData: "",
    };
  }

  componentDidMount = async () => {
    this.getSettingsData();
    // this.getProfileData();
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

  // getProfileData = async () => {
  //   const profileData = await fetch(
  //     `http://localhost:8080/profile/${this.state.profileData.id}`
  //   )
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));
  //   this.setState({ profileData });
  // };

  toggleEditMode = (boolean) => {
    this.setState({
      editMode: boolean,
    });
  };

  // handleSettingsChange = (event, section, field) => {
  //   this.setState((prevState) => ({
  //     profileData: {
  //       ...prevState.profileData,
  //       [section]: {
  //         ...prevState.profileData[section],
  //         [field]: event.target.value,
  //       },
  //     },
  //   }));
  // };

  handleUserInfoSettingsChange = (e, key) => {
    const tempProfileData = this.props.profileData;
    tempProfileData.userInfo[key] = e.target.value;
    this.props.editProfileData(tempProfileData);
  };

  handleExperienceSettingsChange = (event, index, field) => {
    const elementsIndex = this.props.profileData.experience.findIndex(
      (element) => element.expId === index
    );
    let tempArray = [...this.props.profileData.experience];
    tempArray[elementsIndex] = {
      ...tempArray[elementsIndex],
      [field]: event.target.value,
    };
    const tempProfileData = this.props.profileData;
    tempProfileData.experience = tempArray;
    this.props.editProfileData(tempProfileData);
  };

  handleCropImage = (photo) => {
    const tempProfileData = this.props.profileData;
    tempProfileData.userInfo.photo = photo;
    this.props.editProfileData(tempProfileData);
    this.setState({ image: photo });
  };

  // handleDeleteImage = async () => {
  //   await fetch(`http://localhost:8080/profile/${this.props.profileData.id}`, {
  //     method: "patch",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ photo: testPhoto }),
  //   })
  //     .then((res) => res.json())
  //     .catch((err) => console.log(err));
  //   this.setState({ image: testPhoto });
  // };

  render() {
    return (
      <div>
        <SaveSettings objKey="userInfo" />
        <h4>Profile Image</h4>
        <div className="settings-image">
          <img
            className="settings-profile-img"
            src={
              this.state.image
                ? this.state.image
                : this.props.profileData.userInfo.photo
            }
            alt="Profile avatar"
          />
          <div className="image-controls">
            <button onClick={() => this.toggleEditMode(!this.state.editMode)}>
              Edit
            </button>
            <button>Delete</button>
            <p>
              For best results, images should be in a square format, ideally
              200x200, and should not exceed 2MB
            </p>
          </div>
        </div>
        {this.state.editMode && (
          <div>
            <CropperWidget
              userPhoto={this.props.profileData.userInfo.photo}
              handleCropImage={this.handleCropImage}
              aspectRatio={1}
            />
          </div>
        )}
        <hr style={{ border: "solid 1px purple" }} />
        <h4>Basic Info</h4>
        <div className="basic-info-form">
          <div>
            <div className="input-label-pair">
              <label htmlFor="input-name">Name</label>
              <input
                id="input-name"
                className="settings-input input-name"
                type="text"
                defaultValue={this.props.profileData.userInfo.name}
                onChange={(e) => this.handleUserInfoSettingsChange(e, "name")}
              />
            </div>
            <div className="input-label-pair">
              <label htmlFor="input-title">Title</label>
              <input
                id="input-title"
                className="settings-input input-title"
                type="text"
                defaultValue={this.props.profileData.userInfo.title}
                onChange={(e) => this.handleUserInfoSettingsChange(e, "title")}
              />
            </div>
          </div>
          <div className="input-label-pair">
            <label htmlFor="input-description">Description</label>
            <input
              id="input-description"
              className="settings-input input-description"
              type="text"
              defaultValue={this.props.profileData.userInfo.description}
              onChange={(e) =>
                this.handleUserInfoSettingsChange(e, "description")
              }
            />
          </div>
          <div className="input-label-pair">
            <label htmlFor="input-profession">Profession Tag</label>
            <select
              name="Professions"
              onChange={(e) =>
                this.handleUserInfoSettingsChange(e, "profession")
              }
            >
              {this.state.professions.map((profession, i) => (
                <option
                  key={i}
                  value={profession.title}
                  selected={
                    profession.title ===
                    this.props.profileData.userInfo.profession
                  }
                >
                  {profession.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr style={{ border: "solid 1px purple" }} />
        <h4>Contact</h4>
        <div className="contact-form">
          <div>
            <div className="input-label-pair">
              <label htmlFor="input-name">Location</label>
              <select
                name="Locations"
                onChange={(e) =>
                  this.handleUserInfoSettingsChange(e, "location")
                }
              >
                {this.state.locations.map((location, i) => (
                  <option
                    key={i}
                    value={location.title}
                    selected={
                      location.title ===
                      this.props.profileData.userInfo.location
                    }
                  >
                    {location.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-label-pair">
              <label htmlFor="input-name">Phone No.</label>
              <input
                id="input-location"
                className="settings-input input-telephone"
                type="tel"
                defaultValue={this.props.profileData.userInfo.telephone}
                onChange={(e) =>
                  this.handleUserInfoSettingsChange(e, "telephone")
                }
              />
            </div>
          </div>
          <div>
            <div className="input-label-pair">
              <label htmlFor="input-email">Email</label>
              <input
                id="input-email"
                className="settings-input input-email"
                type="email"
                defaultValue={this.props.profileData.userInfo.email}
                onChange={(e) => this.handleUserInfoSettingsChange(e, "email")}
              />
            </div>
            <div className="input-label-pair">
              <label htmlFor="input-wesbite">Website</label>
              <input
                id="input-website"
                className="settings-input input-website"
                type="url"
                defaultValue={this.props.profileData.userInfo.website}
                onChange={(e) =>
                  this.handleUserInfoSettingsChange(e, "website")
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profileData: state.profileSettings.profileData,
});

const mapActionsToProps = (dispatch) => ({
  editProfileData: (text) => dispatch(editProfileData(text)),
});

export default connect(mapStateToProps, mapActionsToProps)(ProfileSettings);
