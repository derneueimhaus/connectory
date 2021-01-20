import React, { Component } from "react";

import "../styles/InfoCard.css";

import testPhoto from "../assets/blank.png";

const userData = {
  userId: 1,
  name: "Test tstersonnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn",
  title: "Marketeer",
  pro: true,
  description:
    "Limitations and exclusions of liability: caveats to limits of liability; interpretation of limits of liability; no liability for force majeure; no liability for loss of profits; no liability for loss of revenue; no liability for loss of use; no liability for loss of opportunities; no liability for loss of data; no liability for consequential loss; per event liability cap upon services contract; aggregate liability cap upon services contract.",
  location: "ChangePRO",
  email: "test@test.com",
  telephone: "012345678",
  website: "test.com",
  featured: {
    title: "Head of Marketing",
    years: "2017 - 2019",
    company: "Coca-Cola",
  },
  profession: "marketing",
  photo: testPhoto,
};

export default class InfoCard extends Component {
  render() {
    return (
      <div className="info-card-container">
        <div className="basic-info">
          <img
            className="profile-img"
            src={userData.photo}
            alt={userData.name}
          />
          <h4>{userData.name}</h4>
          <h5>{userData.title}</h5>
        </div>
        <div className="details">
          <p>{userData.description}</p>
          <span>{userData.pro && "Pro"}</span>
          <hr style={{ border: "solid 1px purple" }} />
          <div className="below-line">
            <div className="contact">
              <h5>Contact</h5>
              <p>{userData.location}</p>
              <p>{userData.telephone}</p>
              <p>{userData.email}</p>
              <p>
                <a href={userData.website} target="_blank">
                  {userData.website}
                </a>
              </p>
            </div>
            <div className="featured-exp">
              <p>{userData.profession}</p>
              <hr style={{ border: "solid 1px white" }} />
              <p>Featured Experience:</p>
              <h5>
                {userData.featured.title}, {userData.featured.company}
              </h5>
              <p>{userData.featured.years}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
