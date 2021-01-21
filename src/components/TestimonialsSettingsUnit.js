import React from "react";

import "../styles/Settings.css";

const handleCheck = (event) => {
  console.log(event.target.name);
};

export default function TestimonialsSettingsUnit({ data, index }) {
  return (
    <div className="settings-testimonials-container">
      <h4>Testimonial {index}</h4>
      <div className="settings-testimonial-controls">
        <img
          className="settings-profile-img"
          src={data.authorImage}
          alt="User"
        />
        <div className="settings-testimonial-info">
          <div>
            <p>Name</p>
            <h5>{data.authorName}</h5>
          </div>
          <div>
            <p>Company</p>
            <h5>{data.authorCompany}</h5>
          </div>
          <div>
            <p>Position</p>
            <h5>{data.authorTitle}</h5>
          </div>
        </div>
        <div className="settings-testimonial-buttons">
          <button>Delete</button>
          <br />
          <input
            id="show"
            type="checkbox"
            name={index}
            defaultChecked={data.show}
            onChange={handleCheck}
          />
          <label htmlFor="show">Show on profile</label>
        </div>
      </div>
      <p>Text</p>
      <p>{data.text}</p>
      <hr style={{ border: "solid 1px purple" }} />
    </div>
  );
}
