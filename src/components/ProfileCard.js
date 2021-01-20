import React from "react";

import "../styles/ProfileCard.css";

export default function ProfileCard({ name, profession, email, photo }) {
  return (
    <div className="profile-card">
      <h5>{name}</h5>
      <h6>{profession}</h6>
      {email ? "email" : null}
      <img className="profile-card-img" src={photo} alt={name} />
    </div>
  );
}
