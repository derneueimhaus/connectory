import React, { useEffect, useState } from "react";

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
      ).then((res) => res.json());
      setProfileData(profileData);
    }
    fetchData();
  }, [match.params.userId]);

  return (
    <div /*className={modal.show ? "modal-overlay" : null}*/>
      {profileData && <InfoCard data={profileData.userInfo} />}
      {profileData && <Testimonials data={profileData.testimonials} />}
      {profileData && <Projects data={profileData.projects} />}
      {profileData && <Experience data={profileData.experience} />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.modal,
});

export default connect(mapStateToProps)(Profile);
