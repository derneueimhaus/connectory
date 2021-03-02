import React, { useState } from "react";
import SignUpOne from "../components/SignUpOne";
import SignUpTwo from "../components/SignUpTwo";

import "../styles/Signup.css";

function Signup() {
  const [screen, setScreen] = useState(false);
  const [userId, setUserId] = useState("");

  return (
    <div className="signup-page-container apply-padding">
      <div className="navbar-dodger"></div>
      {!screen ? (
        <SignUpOne nextScreen={setScreen} setUserId={setUserId} />
      ) : (
        <SignUpTwo id={userId} />
      )}
    </div>
  );
}

export default Signup;
