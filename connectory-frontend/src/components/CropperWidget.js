import React, { useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const CropperWidget = ({ userPhoto, handleCropImage, aspectRatio }) => {
  const [image, setImage] = useState(userPhoto);
  const [, setCropData] = useState("");
  const [cropper, setCropper] = useState();

  const onChange = (e) => {
    e.preventDefault();
    let files = e.target.files;
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
      handleCropImage(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div className="cropper">
      <br />
      <div>
        <input type="file" onChange={onChange} />
        <br />
        <br />
        <Cropper
          style={{ height: "90%", width: "90%" }}
          initialAspectRatio={aspectRatio}
          aspectRatio={aspectRatio}
          preview=".img-preview"
          src={image}
          viewMode={1}
          guides={true}
          dragMode={"move"}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          onInitialized={(instance) => {
            setCropper(instance);
          }}
        />
      </div>
      <button className="button save-cropper-button" onClick={getCropData}>
        Save Image
      </button>
      <br />
    </div>
  );
};

export default CropperWidget;
