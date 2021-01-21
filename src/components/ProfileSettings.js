import React, { Component } from "react";

import AvatarEditor from "react-avatar-editor";

import { connect } from "react-redux";

import "../styles/Settings.css";

import testPhoto from "../assets/blank.png";

const professionsArray = ["testA", "testB", "testC", "testD"];

export class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: testPhoto,
      editMode: false,
      scale: 1,
      profession: "testC",
    };
  }

  toggleEditMode = (boolean) => {
    this.setState({ editMode: boolean });
  };

  setEditorRef = (editor) => {
    if (editor) this.editor = editor;
  };

  handleNewImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  render() {
    return (
      <div>
        <img src={this.state.image} alt="Profile avatar" />
        <button onClick={() => this.toggleEditMode(!this.state.editMode)}>
          Edit
        </button>
        <button>Delete</button>
        {this.state.editMode && (
          <div>
            <AvatarEditor
              ref={this.setEditorRef}
              image={this.state.image}
              scale={parseFloat(this.state.scale)}
              width={200}
              height={200}
              border={10}
              borderRadius={150}
              color={[255, 255, 255, 0.6]}
              rotate={0}
            />
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
          </div>
        )}
        <hr />
        <h4>Basic Info</h4>
        <div className="basic-info-form">
          <div className="input-label-pair">
            <label for="input-name">Name</label>
            <input
              id="input-name"
              className="settings-input input-name"
              type="text"
              defaultValue="John Smith"
            />
          </div>
          <div className="input-label-pair">
            <label for="input-description">Description</label>
            <input
              id="input-description"
              className="settings-input input-description"
              type="text"
              defaultValue="Freelancer proficient in all things marketing. Specialist in Google Ads and Faebook Ads. Based in Amsterdam, headquartered at Change=PRO. Keen to find collaborators for side projects."
            />
          </div>
          <div className="input-label-pair">
            <label for="input-profession">Profession Tag</label>
            <select name="Professions">
              {professionsArray.map((profession) => (
                <option
                  value={profession}
                  selected={profession === this.state.profession}
                >
                  {profession}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(ProfileSettings);
