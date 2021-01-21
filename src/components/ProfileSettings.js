import React, { Component } from "react";

import AvatarEditor from "react-avatar-editor";

import { connect } from "react-redux";

import "../styles/Settings.css";

import testPhoto from "../assets/blank.png";
import ExperienceInput from "./ExperienceInput";

const professionsArray = ["testA", "testB", "testC", "testD"];

const locationsArray = [
  "Change= ZO",
  "Change= NW",
  "Change= PRO",
  "Change= Alumni",
];

const expData = [
  {
    userId: 1,
    featured: true,
    title: "Head of Marketing",
    company: "Coca-Cola",
    yearStart: 2017,
    yearEnd: 2019,
    description:
      "Limitations and exclusions of liability: caveats to limits of liability; interpretation of limits of liability; no liability for force majeure; no liability for loss of profits; no liability for loss of revenue; no liability for loss of use; no liability for loss of opportunities; no liability for loss of data; no liability for consequential loss; per event liability cap upon services contract; aggregate liability cap upon services contract.",
  },
  {
    userId: 1,
    featured: true,
    title: "Senor Marketing Manager",
    company: "IBM",
    yearStart: 2016,
    yearEnd: 2017,
    description:
      "Limitations and exclusions of liability: caveats to limits of liability; interpretation of limits of liability; no liability for force majeure; no liability for loss of profits; no liability for loss of revenue; no liability for loss of use; no liability for loss of opportunities; no liability for loss of data; no liability for consequential loss; per event liability cap upon services contract; aggregate liability cap upon services contract.",
  },
];

export class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: testPhoto,
      newImage: testPhoto,
      editMode: false,
      scale: 1,
      profession: "testC",
      location: "Change= Alumni",
    };
  }

  toggleEditMode = (boolean) => {
    this.setState({ editMode: boolean });
  };

  setEditorRef = (editor) => {
    if (editor) this.editor = editor;
  };

  handleNewImage = (e) => {
    if (e.target.files[0].size > 2097152) {
      alert("Please upload a file smaller than 2MB");
    } else {
      this.setState({ newImage: e.target.files[0] });
    }
  };

  handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  handleSave = (e) => {
    e.preventDefault();
    this.setState({ image: e.target.action });
  };

  render() {
    return (
      <div>
        <h4>Profile Image</h4>
        <div className="settings-image">
          <img
            className="settings-profile-img"
            src={this.state.image}
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
            <AvatarEditor
              ref={this.setEditorRef}
              image={this.state.newImage}
              scale={parseFloat(this.state.scale)}
              width={200}
              height={200}
              border={10}
              borderRadius={150}
              color={[255, 255, 255, 0.6]}
              rotate={0}
            />
            <form onSubmit={this.handleSave}>
              <input
                name="newImage"
                type="file"
                onChange={this.handleNewImage}
                id="newImage"
              />
              <input
                name="scale"
                type="range"
                onChange={this.handleScale}
                min="1"
                max="2"
                step="0.01"
                defaultValue="1"
              />
              <input type="submit" value="Save" />
            </form>
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
              defaultValue="John Smith"
            />
          </div>
          <div className="input-label-pair">
            <label htmlFor="input-description">Description</label>
            <input
              id="input-description"
              className="settings-input input-description"
              type="text"
              defaultValue="Freelancer proficient in all things marketing. Specialist in Google Ads and Faebook Ads. Based in Amsterdam, headquartered at Change=PRO. Keen to find collaborators for side projects."
            />
          </div>
          <div className="input-label-pair">
            <label htmlFor="input-profession">Profession Tag</label>
            <select name="Professions">
              {professionsArray.map((profession, i) => (
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
                {locationsArray.map((location, i) => (
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
                className="settings-input input-location"
                type="text"
                defaultValue="Amsterdam"
              />
            </div>
          </div>
          <div>
            <div className="input-label-pair">
              <label htmlFor="input-email">Email</label>
              <input
                id="input-email"
                className="settings-input input-email"
                type="text"
                defaultValue="test@test.com"
              />
            </div>
            <div className="input-label-pair">
              <label htmlFor="input-wesbite">Website</label>
              <input
                id="input-website"
                className="settings-input input-website"
                type="text"
                defaultValue="test.com"
              />
            </div>
          </div>
        </div>
        <hr style={{ border: "solid 1px purple" }} />
        <h4>Experience</h4>
        <h5>Experience 1</h5>
        <p>Experience 1 is set as your featured experience by default.</p>
        <ExperienceInput data={expData[0]} index={1} />
        <h5>Experience 2</h5>
        <ExperienceInput data={expData[1]} index={2} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(ProfileSettings);
