import React, { useState, useEffect } from "react";

function SaveSettings({ data }) {
  const [saved, setSaved] = useState(false);

  const handleSaveChanges = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
    console.log(data);
  };

  useEffect(() => console.log("updated"), [data]);

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

export default SaveSettings;
