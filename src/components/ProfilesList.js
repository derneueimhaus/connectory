import React, { Component } from "react";
import { Link } from "react-router-dom";

import ProfileCard from "./ProfileCard";

import "../styles/ProfilesList.css";

import testPhoto from "../assets/blank.png";

const testProfObj = [
  {
    name: "test testerson",
    profession: "marketing",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: true,
    photo: testPhoto,
    userId: 1,
  },
  {
    name: "example exampleson",
    profession: "horses",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: false,
    photo: testPhoto,
    userId: 2,
  },
  {
    name: "change changeson",
    profession: "real estate",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: true,
    photo: testPhoto,
    userId: 3,
  },
  {
    name: "test testerson",
    profession: "marketing",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: true,
    photo: testPhoto,
    userId: 4,
  },
  {
    name: "example exampleson",
    profession: "horses",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: false,
    photo: testPhoto,
    userId: 5,
  },
  {
    name: "change changeson",
    profession: "real estate",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: true,
    photo: testPhoto,
    userId: 6,
  },
];

export default class ProfilesList extends Component {
  render() {
    return (
      <div className="profiles-container">
        {testProfObj.map((element, i) => (
          <Link
            className="profile-links"
            key={i}
            to={`/profile/${element.userId}`}
          >
            <ProfileCard
              name={element.name}
              profession={element.profession}
              email={element.email}
              photo={element.photo}
            />
          </Link>
        ))}
      </div>
    );
  }
}
