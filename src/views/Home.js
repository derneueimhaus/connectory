import React from "react";
import ProfilesList from "../components/ProfilesList";
import SearchFilter from "../components/SearchFilter";

export default function Home() {
  return (
    <div>
      <h4>Join the Change= network and connect with collaborators</h4>
      <SearchFilter />
      <ProfilesList />
    </div>
  );
}
