import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { connect } from "react-redux";

import gear from "../assets/gear.png";
import personIcon from "../assets/person-icon.png";
import verloop from "../assets/verloop-01.png";

import "../styles/NavBar.css";

function NavBar({ login }) {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="container-helper"></div>
        <Link to="/" className="navbar-header">
          <div>CONNECTORY</div>
        </Link>
        <div className="buttons-container">
          <Link to="/signup">
            <button className="button log-in-button">LOG IN</button>
          </Link>
          <Link to={`/settings/${login.userId}`}>
            <img src={gear} alt="Settings" className="navbar-icon" />
          </Link>
          <Link to={`/profile/${login.userId}`}>
            <img src={personIcon} alt="Profile" className="navbar-icon" />
          </Link>
        </div>
      </div>
      <div className="verloop-container">
        <img className="verloop" src={verloop} alt="verloop" />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  login: state.login,
});

const mapActionsToProps = {};

export default withRouter(connect(mapStateToProps, mapActionsToProps)(NavBar));
