import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Phone } from "../assets/phone.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Website } from "../assets/website.svg";

import badge from "../assets/pro-badge.png";

import "../styles/ProfileCard.css";

export default function ProfileCard({
  name,
  profession,
  email,
  telephone,
  website,
  photo,
  pro,
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
          <div className="badge-and-icons">
            {(email || telephone || website) && (
              <span className="contact-icons-container">
                {email && <Email className="contact-icon" />}
                {telephone && <Phone className="contact-icon" />}
                {website && <Website className="contact-icon" />}
              </span>
            )}
            {pro && <img className="pro-badge" src={badge} alt="Change= PRO" />}
          </div>
        </div>
      </div>
    </Link>
  );
}
