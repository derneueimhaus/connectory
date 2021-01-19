import React from "react";
import { connect } from "react-redux";

const handleSelection = (event) => {
  console.log(event.target.value);
};

const Checkboxes = ({ title, options }) => (
  <div>
    <p>{title}</p>
    {options.map((option) => (
      <span>
        <label>{option}</label>
        <input
          type="checkbox"
          name={option}
          value={option}
          onClick={handleSelection}
        />
      </span>
    ))}
  </div>
);

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(Checkboxes);
