import React from "react";
import InfoCard from "../components/InfoCard";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

export default function Profile({ match }) {
  return (
    <div>
      <h1>this is the profile for user ID: {match.params.userId}</h1>
      <InfoCard />
      <Testimonials />
      <Projects />
    </div>
  );
}
