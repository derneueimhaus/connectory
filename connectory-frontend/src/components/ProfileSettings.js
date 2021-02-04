import React, { Component } from "react";

import { connect } from "react-redux";

import "../styles/Settings.css";

import ExperienceInput from "./ExperienceInput";
// import ImageEditor from "./ImageEditor";
import CropperWidget from "./CropperWidget";

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

  handleSettingsChange = (event, section, field) => {
    this.setState((prevState) => ({
      profileData: {
        ...prevState.profileData,
        [section]: {
          ...prevState.profileData[section],
          [field]: event.target.value,
        },
      },
    }));
  };

  // handleExperienceSettingsChange = (event, index, field) => {
  //   const elementsIndex = this.state.profileData.experience.findIndex(
  //     (element) => element.expId === index
  //   );
  //   let newArray = [this.state.profileData.experience];
  //   // console.log(newArray[0][elementsIndex]);
  //   // console.log("1");
  //   newArray[0][elementsIndex] = {
  //     ...newArray,
  //     [field]: event.target.value,
  //   };
  //   this.setState((prevState) => ({
  //     profileData: {
  //       ...prevState.profileData,
  //       experience: newArray,
  //     },
  //   }));
  // };
  // https://medium.com/javascript-in-plain-english/react-updating-a-value-in-state-array-7bae7c7eaef9

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
                <CropperWidget userPhoto={this.state.image} />
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
              <div>
                <div className="input-label-pair">
                  <label htmlFor="input-name">Name</label>
                  <input
                    id="input-name"
                    className="settings-input input-name"
                    type="text"
                    defaultValue={this.state.profileData.userInfo.name}
                    onChange={(e) =>
                      this.handleSettingsChange(e, "userInfo", "name")
                    }
                  />
                </div>
                <div className="input-label-pair">
                  <label htmlFor="input-title">Title</label>
                  <input
                    id="input-title"
                    className="settings-input input-title"
                    type="text"
                    defaultValue={this.state.profileData.userInfo.title}
                    onChange={(e) =>
                      this.handleSettingsChange(e, "userInfo", "title")
                    }
                  />
                </div>
              </div>
              <div className="input-label-pair">
                <label htmlFor="input-description">Description</label>
                <input
                  id="input-description"
                  className="settings-input input-description"
                  type="text"
                  defaultValue={this.state.profileData.userInfo.description}
                  onChange={(e) =>
                    this.handleSettingsChange(e, "userInfo", "description")
                  }
                />
              </div>
              <div className="input-label-pair">
                <label htmlFor="input-profession">Profession Tag</label>
                <select
                  name="Professions"
                  onChange={(e) =>
                    this.handleSettingsChange(e, "userInfo", "profession")
                  }
                >
                  {this.state.professions.map((profession, i) => (
                    <option
                      key={i}
                      value={profession}
                      selected={
                        profession ===
                        this.state.profileData.userInfo.profession
                      }
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
                  <select
                    name="Locations"
                    onChange={(e) =>
                      this.handleSettingsChange(e, "userInfo", "location")
                    }
                  >
                    {this.state.locations.map((location, i) => (
                      <option
                        key={i}
                        value={location}
                        selected={
                          location === this.state.profileData.userInfo.location
                        }
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
                    onChange={(e) =>
                      this.handleSettingsChange(e, "userInfo", "telephone")
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
                    defaultValue={this.state.profileData.userInfo.email}
                    onChange={(e) =>
                      this.handleSettingsChange(e, "userInfo", "email")
                    }
                  />
                </div>
                <div className="input-label-pair">
                  <label htmlFor="input-wesbite">Website</label>
                  <input
                    id="input-website"
                    className="settings-input input-website"
                    type="text"
                    defaultValue={this.state.profileData.userInfo.website}
                    onChange={(e) =>
                      this.handleSettingsChange(e, "userInfo", "website")
                    }
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
              index={0}
              handleSettingsChange={this.handleExperienceSettingsChange}
            />
            <h5>Experience 2</h5>
            <ExperienceInput
              data={this.state.profileData.experience[1]}
              index={1}
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
