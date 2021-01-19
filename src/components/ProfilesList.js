import React, { Component } from "react";
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
  },
  {
    name: "example exampleson",
    profession: "horses",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: false,
    photo: testPhoto,
  },
  {
    name: "change changeson",
    profession: "real estate",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: true,
    photo: testPhoto,
  },
  {
    name: "test testerson",
    profession: "marketing",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: true,
    photo: testPhoto,
  },
  {
    name: "example exampleson",
    profession: "horses",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: false,
    photo: testPhoto,
  },
  {
    name: "change changeson",
    profession: "real estate",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: true,
    photo: testPhoto,
  },
];

export default class ProfilesList extends Component {
  render() {
    return (
      <div className="profiles-container">
        {testProfObj.map((element, i) => (
          <ProfileCard
            name={element.name}
            profession={element.profession}
            email={element.email}
            photo={element.photo}
            key={i}
          />
        ))}
      </div>
    );
  }
}
