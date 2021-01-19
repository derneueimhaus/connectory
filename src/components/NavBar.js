import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { withRouter } from "react-router";

import "../styles/NavBar.css";

function NavBar() {
  return (
    <Router>
      <div className="navbar">
        <h3>Connectory</h3>
        <div className="buttons-container">
          <Link>
            <button>Settings</button>
          </Link>
          <Link to="/account">
            <button>Account</button>
          </Link>
        </div>
      </div>
    </Router>
  );
}

export default withRouter(NavBar);
