import React from "react";

import { connect } from "react-redux";

import InfoCard from "../components/InfoCard";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

import "../styles/Profile.css";

function Profile({ match, modal }) {
  return (
    <div /*className={modal.show ? "modal-overlay" : null}*/>
      <h1>this is the profile for user ID: {match.params.userId}</h1>
      <InfoCard />
      <Testimonials />
      <Projects />
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(Profile);
