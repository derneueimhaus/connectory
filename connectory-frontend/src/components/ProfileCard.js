import React from "react";

import "../styles/ProfileCard.css";

export default function ProfileCard({
  name,
  profession,
  email,
  telephone,
  website,
  photo,
}) {
  return (
    <div className="profile-card">
      <h5>{name}</h5>
      <h6>{profession}</h6>
      {email && "email"}
      {telephone && "telephone"}
      {website && "website"}
      <img className="profile-card-img" src={photo} alt={name} />
    </div>
  );
}
