import React, { Component } from "react";
import ProfileCard from "./ProfileCard";

const testProfObj = [
  {
    name: "testy testerson",
    profession: "marketing",
    email: "test@test.com",
    telephone: "012345678",
    website: "test.com",
    pro: true,
    photo: "src/blank-profile-picture.png",
  },
  {},
];

export default class ProfilesList extends Component {
  render() {
    return (
      <div>
        <ProfileCard />
      </div>
    );
  }
}
