import React from "react";
import { connect } from "react-redux";

import { editProfileData } from "../redux/actions/profileSettingsActions";

import ExperienceInput from "./ExperienceInput";
import SaveSettings from "./SaveSettings";

export const ExperienceSettings = ({ profileData, editProfileData }) => {
  const handleExperienceSettingsChange = (event, index, field) => {
    const elementsIndex = profileData.experience.findIndex(
      (element) => element.expId === index
    );
    let tempArray = [...profileData.experience];
    tempArray[elementsIndex] = {
      ...tempArray[elementsIndex],
      [field]: event.target.value,
    };
    const tempProfileData = profileData;
    tempProfileData.experience = tempArray;
    editProfileData(tempProfileData);
  };

  return (
    <div>
      <SaveSettings objKey="experience" />
      <h4>Experience</h4>
      <h5>Experience 1</h5>
      <p>Experience 1 is set as your featured experience by default.</p>
      <ExperienceInput
        data={profileData.experience[0]}
        index={0}
        handleSettingsChange={handleExperienceSettingsChange}
      />
      <h5>Experience 2</h5>
      <ExperienceInput
        data={profileData.experience[1]}
        index={1}
        handleSettingsChange={handleExperienceSettingsChange}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  profileData: state.profileSettings.profileData,
});

const mapDispatchToProps = (dispatch) => ({
  editProfileData: (text) => dispatch(editProfileData(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceSettings);
