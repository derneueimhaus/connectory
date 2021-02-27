import React from "react";

import "../styles/ProjectModal.css";
import CropperWidget from "./CropperWidget";

export default function CropperModal({
  toggleModalShow,
  handleCropImage,
  photo,
}) {
  return (
    <div className="modal">
      Test
      <CropperWidget
        userPhoto={photo}
        handleCropImage={handleCropImage}
        aspectRatio={1}
      />
      <button className="sticky-btn" onClick={() => toggleModalShow(false)}>
        Close
      </button>
    </div>
  );
}
