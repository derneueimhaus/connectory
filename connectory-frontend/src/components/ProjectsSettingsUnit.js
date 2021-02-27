import React, { Component } from "react";

import CropperWidget from "./CropperWidget";

import logo from "../assets/Change=Logo.png";

export default class ProjectsSettingsUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.data.photo,
      editMode: false,
    };
  }

  handleCheck = (event) => {
    const {
      target: { checked },
    } = event;
    this.props.handleCheckboxChange(checked, this.props.data.projectId);
  };

  toggleEditMode = (boolean) => {
    this.setState({ editMode: boolean });
  };

  handleChildImageSave = (file) => {
    this.setState({ image: file });
  };

  render() {
    const { index, data } = this.props;
    return (
      <div>
        <h4>Project {index + 1}</h4>
        <div className="input-label-pair">
          <label htmlFor={`${index}_input-project-headline`}>Headline</label>
          <input
            id={`${index}_input-project-headline`}
            className="settings-input input-project-headline"
            type="text"
            maxLength={75}
            defaultValue={data.headline}
          />
        </div>
        <div className="input-label-pair">
          <label htmlFor={`${index}_input-project-subheading`}>
            Subheading
          </label>
          <input
            id={`${index}_input-project-subheading`}
            className="settings-input input-project-subheading"
            type="text"
            maxLength={75}
            defaultValue={data.subheader}
          />
        </div>
        <div className="input-label-pair">
          <label htmlFor={`${index}_input-project-description`}>
            Description
          </label>
          <input
            id={`${index}_input-project-description`}
            className="settings-input input-description"
            type="text"
            maxLength={450}
            defaultValue={data.description}
          />
        </div>
        <div className="settings-image">
          <img
            className="settings-project-img"
            src={this.state.image ? this.state.image : logo}
            alt="Project Backdrop"
          />
          <div className="image-controls">
            <button onClick={() => this.toggleEditMode(!this.state.editMode)}>
              {this.state.editMode ? "Hide" : "Edit"}
            </button>
            <button>Delete</button>
            <input
              id="show"
              type="checkbox"
              name={index}
              checked={this.props.isSelected}
              disabled={this.props.isDisabled}
              onChange={this.handleCheck}
            />
            <label htmlFor="show">Show on profile</label>
            <p>
              For best results, images should be in a square format, ideally
              200x400, and should not exceed 2MB
            </p>
          </div>
        </div>
        {this.state.editMode && (
          <CropperWidget
            handleCropImage={this.handleChildImageSave}
            userPhoto={this.state.image}
            aspectRatio={2 / 1}
          />
        )}
        <hr style={{ border: "solid 1px purple" }} />
      </div>
    );
  }
}
