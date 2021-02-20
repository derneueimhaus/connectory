import React from "react";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Loading() {
  return (
    <div className="loading">
      <Loader type="Oval" color="#2086c3" height={80} width={80} />
    </div>
  );
}
