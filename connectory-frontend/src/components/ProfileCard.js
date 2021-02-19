import React from "react";

import { Link } from "react-router-dom";

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
  id,
}) {
  return (
    <Link className="profile-links" key={id} to={`/profile/${id}`}>
      <div className="profile-card">
        <div className="profile-card-header">
          <p className="profile-card-name">{name}</p>
          <p className="profile-card-profession">{profession}</p>
        </div>
        <div>
          <img className="profile-card-img" src={photo} alt={name} />
          {(email || telephone || website) && (
            <span className="contact-icons-container">
              {email && <Email className="contact-icon" />}
              {telephone && <Phone className="contact-icon" />}
              {website && <Website className="contact-icon" />}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
