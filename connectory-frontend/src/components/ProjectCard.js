import React, { Component } from "react";

import { connect } from "react-redux";
import { toggleModal, updateModalData } from "../redux/actions/modalActions";

import ProjectModal from "./ProjectModal";

import "../styles/ProjectCard.css";

class ProjectCard extends Component {
  toggleModal = (boolean) => {
    this.props.toggleModal(boolean);
    if (this.props.modal.show === false) {
      this.props.updateModalData(this.props.data);
    } else {
      this.props.updateModalData("");
    }
  };

  render() {
    return (
      <div
        className="project-card"
        style={{ backgroundImage: `url(${this.props.data.photo})` }}
        onClick={() => this.toggleModal(!this.props.modal.show)}
      >
        <div className="text-box">
          <h4>{this.props.data.headline}</h4>
          <h5>{this.props.data.subheader}</h5>
          {this.props.modal.show && <ProjectModal />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapActionsToProps = { toggleModal, updateModalData };

export default connect(mapStateToProps, mapActionsToProps)(ProjectCard);
