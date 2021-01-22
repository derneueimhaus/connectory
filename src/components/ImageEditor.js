import React, { Component } from "react";

import AvatarEditor from "react-avatar-editor";

export default class ImageEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newImage: this.props.photo,
      scale: 1,
    };
  }

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
    this.props.handleSave(e.target.action);
  };

  render() {
    return (
      <div>
        <div>
          <AvatarEditor
            ref={this.setEditorRef}
            image={this.state.newImage}
            scale={parseFloat(this.state.scale)}
            width={this.props.width}
            height={this.props.height}
            border={10}
            borderRadius={this.props.borderRadius}
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
      </div>
    );
  }
}
