import React, { Component } from "react";

import { connect } from "react-redux";

import "../styles/Settings.css";

import testPhoto from "../assets/blank.png";

import ExperienceInput from "./ExperienceInput";
// import ImageEditor from "./ImageEditor";
import CropperWidget from "./CropperWidget";

export class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: testPhoto,
      editMode: false,
      // scale: 1,
      professions: [],
      locations: [],
      profession: "testC",
      location: "Change= Alumni",
    };
  }

  componentDidMount = async () => {
    this.getSettingsData();
    this.getProfileData();
    const profileImage = await fetch(`http://localhost:8080/profilePhotos/1`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    this.setState({ image: profileImage.croppedPhoto });
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

  getProfileData = async () => {
    const profileData = await fetch(`http://localhost:8080/profile/1`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    this.setState({ profileData });
  };

  toggleEditMode = (boolean) => {
    this.setState({ editMode: boolean });
  };

  handleChildImageSave = (file) => {
    this.setState({ image: file });
  };

  render() {
    return (
      <div>
        {this.state.profileData ? (
          <div>
            <h4>Profile Image</h4>
            <div className="settings-image">
              <img
                className="settings-profile-img"
                src={this.state.image}
                alt="Profile avatar"
              />
              <div className="image-controls">
                <button
                  onClick={() => this.toggleEditMode(!this.state.editMode)}
                >
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
                <CropperWidget userPhoto={testPhoto} />
                {/* <ImageEditor
              handleSave={this.handleChildImageSave}
              height={200}
              width={200}
              borderRadius={150}
              photo={this.state.image}
            /> */}
              </div>
            )}
            <hr style={{ border: "solid 1px purple" }} />
            <h4>Basic Info</h4>
            <div className="basic-info-form">
              <div className="input-label-pair">
                <label htmlFor="input-name">Name</label>
                <input
                  id="input-name"
                  className="settings-input input-name"
                  type="text"
                  defaultValue={this.state.profileData.userInfo.name}
                />
              </div>
              <div className="input-label-pair">
                <label htmlFor="input-description">Description</label>
                <input
                  id="input-description"
                  className="settings-input input-description"
                  type="text"
                  defaultValue={this.state.profileData.userInfo.description}
                />
              </div>
              <div className="input-label-pair">
                <label htmlFor="input-profession">Profession Tag</label>
                <select name="Professions">
                  {this.state.professions.map((profession, i) => (
                    <option
                      key={i}
                      value={profession}
                      selected={profession === this.state.profession}
                    >
                      {profession}
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
                  <select name="Locations">
                    {this.state.locations.map((location, i) => (
                      <option
                        key={i}
                        value={location}
                        selected={location === this.state.location}
                      >
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-label-pair">
                  <label htmlFor="input-name">Phone No.</label>
                  <input
                    id="input-location"
                    className="settings-input input-telephone"
                    type="number"
                    defaultValue={this.state.profileData.userInfo.telephone}
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
                    defaultValue={this.state.profileData.userInfo.email}
                  />
                </div>
                <div className="input-label-pair">
                  <label htmlFor="input-wesbite">Website</label>
                  <input
                    id="input-website"
                    className="settings-input input-website"
                    type="text"
                    defaultValue={this.state.profileData.userInfo.email}
                  />
                </div>
              </div>
            </div>
            <hr style={{ border: "solid 1px purple" }} />
            <h4>Experience</h4>
            <h5>Experience 1</h5>
            <p>Experience 1 is set as your featured experience by default.</p>
            <ExperienceInput
              data={this.state.profileData.experience[0]}
              index={1}
            />
            <h5>Experience 2</h5>
            <ExperienceInput
              data={this.state.profileData.experience[1]}
              index={2}
            />
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(ProfileSettings);
