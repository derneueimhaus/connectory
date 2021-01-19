import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h3>Connectory</h3>
      </Link>
      <div className="buttons-container">
        <Link>
          <button>Settings</button>
        </Link>
        <Link to="/account">
          <button>Account</button>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(NavBar);
