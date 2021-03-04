import React from "react";

import "../styles/Modals.css";
import CropperWidget from "./CropperWidget";

export default function CropperModal({
  toggleModalShow,
  handleCropImage,
  photo,
}) {
  return (
    <div className="modal">
      <CropperWidget
        userPhoto={photo}
        handleCropImage={handleCropImage}
        aspectRatio={1}
      />
      <button
        className="sticky-btn button"
        onClick={() => toggleModalShow(false)}
      >
        CLOSE
      </button>
    </div>
  );
}
