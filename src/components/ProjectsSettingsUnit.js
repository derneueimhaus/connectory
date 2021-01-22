import React, { Component } from "react";

import ImageEditor from "./ImageEditor";

export default class ProjectsSettingsUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.data.photo,
      editMode: false,
    };
  }

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
        <div className="input-label-pair">
          <label htmlFor={`${index}_input-project-headline`}>Headline</label>
          <input
            id={`${index}_input-project-headline`}
            className="settings-input input-project-headline"
            type="text"
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
            defaultValue={data.description}
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
            <p>
              For best results, images should be in a square format, ideally
              200x400, and should not exceed 2MB
            </p>
          </div>
        </div>
        {this.state.editMode && (
          <ImageEditor
            handleSave={this.handleChildImageSave}
            height={200}
            width={400}
            borderRadius={20}
            photo={this.state.image}
          />
        )}
      </div>
    );
  }
}
