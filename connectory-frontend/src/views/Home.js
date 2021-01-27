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
        <h4>Join the Change= network and connect with collaborators</h4>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </div>
      <SearchFilter professions={professionsArray} />
      <ProfilesList />
    </div>
  );
}
