import React, { Component } from "react";
import Checkboxes from "./Checkboxes";

const testFilterOptions = [
  {
    title: "location",
    options: [
      { option: "ChangePRO", key: "chpro" },
      { option: "Change= ZO", key: "chzo" },
      { option: "Change= NW", key: "chnw" },
    ],
  },
  {
    title: "contact",
    options: [
      { option: "email", key: "email" },
      { option: "phone", key: "phone" },
      { option: "website", key: "website" },
    ],
  },
];

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professionValues: [],
      locationOptions: {},
      contactOptions: {},
    };
  }

  handleDropdownChange = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    this.setState({ professionValues: value });
  };

  handleDropdownReset = () => {
    this.setState({ professionValues: [] });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <select
              name="Professions"
              multiple={true}
              onChange={(e) => this.handleDropdownChange(e)}
            >
              <option value="default" disabled={true}>
                SELECT PROFESSION...
              </option>
              {this.props.professions.map((profession, i) => (
                <option key={i} value={profession}>
                  {profession}
                </option>
              ))}
            </select>
            {this.state.professionValues.map((profession) => (
              <span>{profession}</span>
            ))}
          </div>
          {testFilterOptions.map((obj) => (
            <Checkboxes
              title={obj.title}
              options={obj.options}
              key={obj.title}
            />
          ))}
          <button type="reset" onClick={this.handleDropdownReset}>
            Clear Filters
          </button>
          <button type="submit" onClick={(e) => e.preventDefault()}>
            Apply Filters
          </button>
        </form>
      </div>
    );
  }
}
