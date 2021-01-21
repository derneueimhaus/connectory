import React, { Component } from "react";

import AvatarEditor from "react-avatar-editor";

import { connect } from "react-redux";

import testPhoto from "../assets/blank.png";

export class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: testPhoto,
      scale: 1,
    };
  }

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
        <input name="newImage" type="file" onChange={this.handleNewImage} />
        <input
          name="scale"
          type="range"
          onChange={this.handleScale}
          min="1"
          max="2"
          step="0.01"
          defaultValue="1"
        />
        <input type="text" defaultValue="John Smith" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(ProfileSettings);
