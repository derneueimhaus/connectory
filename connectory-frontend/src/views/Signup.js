import React, { useState } from "react";
import SignUpOne from "../components/SignUpOne";
import SignUpTwo from "../components/SignUpTwo";

import "../styles/Signup.css";

function Signup() {
  const [screen, setScreen] = useState(false);
  const [userId, setUserId] = useState("");

  return (
    <div className="signup-page-container">
      <button onClick={() => setScreen(!screen)}>toggle screens</button>
      {!screen ? (
        <SignUpOne nextScreen={setScreen} setUserId={setUserId} />
      ) : (
        <SignUpTwo id={userId} />
      )}
    </div>
  );
}

export default Signup;
