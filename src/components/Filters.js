import React, { Component } from "react";
import Checkboxes from "./Checkboxes";

const testFilterOptions = [
  {
    title: "location",
    options: ["ChangePRO", "Change= Zuid-Oost", "Change= Nieuw-West"],
  },
  {
    title: "contact",
    options: ["email", "phone", "website"],
  },
];

export default class Filters extends Component {
  render() {
    return (
      <div>
        <form>
          <select mutliple name="Professions">
            <option value="" disabled selected>
              Select a profession...
            </option>
            <option value="testA">testA</option>
            <option value="testB">testB</option>
            <option value="testC">testC</option>
            <option value="testD">testD</option>
          </select>
          {testFilterOptions.map((obj) => (
            <Checkboxes title={obj.title} options={obj.options} />
          ))}
          <button type="reset">Clear Filters</button>
          <button type="submit" onClick={(e) => e.preventDefault()}>
            Apply Filters
          </button>
        </form>
      </div>
    );
  }
}
