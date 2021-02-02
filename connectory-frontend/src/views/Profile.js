import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import Experience from "../components/Experience";
import InfoCard from "../components/InfoCard";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";

import "../styles/Profile.css";

function Profile({ match, modal }) {
  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const profileData = await fetch(
        `http://localhost:8080/profile/${match.params.userId}`
      )
        .then((res) => res.json())
        .catch((err) => console.log(err));
      setProfileData(profileData);
    }
    fetchData();
  }, [match.params.userId]);

  return (
    <div /*className={modal.show ? "modal-overlay" : null}*/>
      {profileData && (
        <InfoCard
          data={profileData.userInfo}
          experienceData={
            profileData.experience ? profileData.experience[0] : null
          }
        />
      )}

      {profileData && <Testimonials data={profileData.testimonials} />}
      {profileData && <Projects data={profileData.projects} />}
      {profileData && <Experience data={profileData.experience} />}

      {/* {profileData.testimonials.length > 0 ? (
        <Testimonials data={profileData.testimonials} />
      ) : (
        "Oops! Looks like you don't have any Testimonials yet. Why don't we change that?"
      )}
      {profileData.projects[0] ? (
        <Projects data={profileData.projects} />
      ) : (
        <p>
          Oops! Looks like you don't have any Projects yet.{" "}
          <Link to={`/settings/${match.params.userId}`}>
            Why don't we change that?
          </Link>
        </p>
      )}
      {profileData.experience[0] ? (
        <Experience data={profileData.experience} />
      ) : (
        "Oops! Looks like you don't have any Experience yet. Why don't we change that?"
      )} */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(Profile);
