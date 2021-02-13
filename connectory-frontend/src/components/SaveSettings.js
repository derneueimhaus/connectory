import React, { useState } from "react";

import { connect } from "react-redux";

export function SaveSettings({ objKey, profileData }) {
  const [saved, setSaved] = useState(false);

  const handleSaveChanges = async () => {
    await fetch(`http://localhost:8080/profile/${profileData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ [objKey]: profileData[objKey] }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  return (
    <div className="saved-container">
      <button className="button" onClick={handleSaveChanges}>
        Save Changes
      </button>
      {saved && (
        <p className="saved">{`Saved ${String.fromCharCode(10003)}`}</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  profileData: state.profileSettings.profileData,
});

export default connect(mapStateToProps)(SaveSettings);
