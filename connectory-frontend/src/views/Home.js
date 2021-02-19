import React, { useEffect, useState } from "react";
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
  const [filterOptions, setFilterOptions] = useState("");

  const getFilterData = async () => {
    const filterOptions = await fetch(`http://localhost:8080/filteroptions`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setFilterOptions(filterOptions);
  };

  useEffect(() => {
    getFilterData();
  }, []);

  return (
    <div>
      <div className="home-page-header">
        <span className="home-page-title">
          Join the Change= network and connect with collaborators
        </span>
        <Link className="sign-up-button-a" to="/signup">
          <button className="button sign-up-button">SIGN UP</button>
        </Link>
      </div>
      <div className="apply-padding">
        <SearchFilter filterOptions={filterOptions} />
        <ProfilesList />
      </div>
    </div>
  );
}
