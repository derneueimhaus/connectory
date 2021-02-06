import React from "react";
import { Link } from "react-router-dom";

import ProfilesList from "../components/ProfilesList";
import SearchFilter from "../components/SearchFilter";

const professionsArray = [
  "testA",
  "testB",
  "testC",
  "testD",
  "testA",
  "testB",
  "testC",
  "testD",
];

export default function Home() {
  return (
    <div>
      <div className="home-page-header">
        <p className="home-page-title">
          Join the Change= network and connect with collaborators
        </p>
        <Link className="sign-up-button-a" to="/signup">
          <button className="button sign-up-button">SIGN UP</button>
        </Link>
      </div>
      <div className="apply-padding">
        <SearchFilter professions={professionsArray} />
        <ProfilesList />
      </div>
    </div>
  );
}
