import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { ReactComponent as Gear } from "../assets/gear.svg";
import { ReactComponent as PinkPerson } from "../assets/pink_person.svg";
import verloop from "../assets/verloop-01.png";

import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h3>Connectory</h3>
      </Link>
      <div className="buttons-container">
        <Link to="/signup">
          <button>Log In</button>
        </Link>
        <Link to="/settings">
          <Gear className="navbar-icon" />
        </Link>
        <Link to="/profile/1">
          <PinkPerson className="navbar-icon" />
        </Link>
      </div>
    </div>
  );
}

export default withRouter(NavBar);
