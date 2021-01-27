import React from "react";

import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Website } from "../assets/website.svg";

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
      <div className="contact-icons-container">
        {email && <Email className="contact-icon" />}
        {telephone && <Phone className="contact-icon" />}
        {website && <Website className="contact-icon" />}
      </div>
      <img className="profile-card-img" src={photo} alt={name} />
    </div>
  );
}
