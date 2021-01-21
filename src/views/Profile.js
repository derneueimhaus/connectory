import React from "react";

import { connect } from "react-redux";
import Explanations from "../components/Explanations";

import InfoCard from "../components/InfoCard";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

import "../styles/Profile.css";

const expData = [
  {
    userId: 1,
    title: "Head of Marketing",
    company: "Coca-Cola",
    description:
      "Limitations and exclusions of liability: caveats to limits of liability; interpretation of limits of liability; no liability for force majeure; no liability for loss of profits; no liability for loss of revenue; no liability for loss of use; no liability for loss of opportunities; no liability for loss of data; no liability for consequential loss; per event liability cap upon services contract; aggregate liability cap upon services contract.",
  },
  {
    userId: 1,
    title: "Senor Marketing Manager",
    company: "IBM",
    description:
      "Limitations and exclusions of liability: caveats to limits of liability; interpretation of limits of liability; no liability for force majeure; no liability for loss of profits; no liability for loss of revenue; no liability for loss of use; no liability for loss of opportunities; no liability for loss of data; no liability for consequential loss; per event liability cap upon services contract; aggregate liability cap upon services contract.",
  },
];

function Profile({ match, modal }) {
  return (
    <div /*className={modal.show ? "modal-overlay" : null}*/>
      <h1>this is the profile for user ID: {match.params.userId}</h1>
      <InfoCard />
      <Testimonials />
      <Projects />
      <Explanations data={expData} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(Profile);
