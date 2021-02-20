import React from "react";

import "../styles/ProjectModal.css";
import CropperWidget from "./CropperWidget";

export default function CropperModal({
  toggleModalShow,
  handleCropImage,
  id,
  photo,
}) {
  return (
    <div className="modal">
      Test
      <CropperWidget
        userPhoto={photo}
        id={id}
        handleCropImage={handleCropImage}
      />
      <button className="sticky-btn" onClick={() => toggleModalShow(false)}>
        Close
      </button>
    </div>
  );
}
