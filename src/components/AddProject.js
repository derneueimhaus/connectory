import React, { Component } from "react";

import ImageEditor from "./ImageEditor";

import logo from "../assets/logo.jpg";

export default class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: logo,
    };
  }

  handleCheck = (event) => {
    console.log(event.target.name);
  };

  toggleEditMode = (boolean) => {
    this.setState({ editMode: boolean });
  };

  handleChildImageSave = (file) => {
    this.setState({ image: file });
  };

  render() {
    const { index } = this.props;
    return (
      <div>
        <h4>Project {index ? index + 1 : "Creator"}</h4>
        <div className="input-label-pair">
          <label htmlFor={`${index}_input-project-headline`}>Headline</label>
          <input
            id={`${index}_input-project-headline`}
            className="settings-input input-project-headline"
            type="text"
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
          />
        </div>
        <div className="settings-image">
          <img
            className="settings-project-img"
            src={this.state.image}
            alt="Project Backdrop"
          />
          <div className="image-controls">
            <button onClick={() => this.toggleEditMode(!this.state.editMode)}>
              Edit
            </button>
            <button>Delete</button>
            <input id="show" type="checkbox" onChange={this.handleCheck} />
            <label htmlFor="show">Show on profile</label>
            <p>
              For best results, images should be in a square format, ideally
              200x400, and should not exceed 2MB
            </p>
          </div>
        </div>
        <ImageEditor
          handleSave={this.handleChildImageSave}
          height={200}
          width={400}
          borderRadius={20}
          photo={this.state.image}
        />
        <hr style={{ border: "solid 1px purple" }} />
      </div>
    );
  }
}
