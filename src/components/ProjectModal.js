import React from "react";

import { connect } from "react-redux";
import { toggleModal } from "../redux/actions/modalActions";

import "../styles/ProjectModal.css";

function ProjectModal(props) {
  return (
    <div className="modal">
      This is a modal
      <p>{props.modal.data.projectId}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

const mapActionsToProps = { toggleModal };

export default connect(mapStateToProps, mapActionsToProps)(ProjectModal);
