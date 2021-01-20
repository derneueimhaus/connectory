import React, { Component } from "react";

import "../styles/ProjectCard.css";

export default class ProjectCard extends Component {
  render() {
    return (
      <div
        className="project-card"
        style={{ backgroundImage: `url(${this.props.data.photo})` }}
      >
        <h4>{this.props.data.headline}</h4>
        <h5>{this.props.data.subheader}</h5>
      </div>
    );
  }
}
