import React, { useState, useEffect } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const CropperWidget = ({ userPhoto }) => {
  const [image, setImage] = useState(userPhoto);
  const [cropData, setCropData] = useState("");
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
    }
  };

  useEffect(() => {
    if (cropData) {
      postImage(cropData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cropData]);

  async function postImage() {
    await fetch(`http://localhost:8080/profilePhotos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        croppedPhoto: cropData,
      }),
    });
  }

  return (
    <div>
      <br />
      <div>
        <input type="file" onChange={onChange} />
        <br />
        <br />
        <Cropper
          style={{ height: 400, width: 400 }}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          guides={true}
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
      <button onClick={getCropData}>Crop Image</button>
      <br />
    </div>
  );
};

export default CropperWidget;
