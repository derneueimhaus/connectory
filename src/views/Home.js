import React from "react";
import ProfilesList from "../components/ProfilesList";
import SearchFilter from "../components/SearchFilter";

export default function Home() {
  return (
    <div>
      <h4>This is the Home page</h4>
      <SearchFilter />
      <ProfilesList />
    </div>
  );
}
