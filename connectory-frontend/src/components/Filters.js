import React, { Component } from "react";
import Checkboxes from "./Checkboxes";

import { connect } from "react-redux";
import { clearFilters } from "../redux/actions/filterActions";

export class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professionValues: [],
      locationOptions: {},
      contactOptions: {},
    };
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:8080/filters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        professions: this.state.professionValues,
        locationContactFilters: this.props.filters,
      }),
    });
  };

  handleDropdownChange = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    this.setState({ professionValues: value });
  };

  handleReset = () => {
    this.props.clearFilters();
    this.setState({ professionValues: [] });
  };

  render() {
    const checkboxData = [
      this.props.filterOptions[1],
      this.props.filterOptions[2],
    ];
    return (
      <div>
        <form>
          <div>
            <select
              className="filters-select-professions"
              name="Professions"
              multiple={true}
              onChange={(e) => this.handleDropdownChange(e)}
            >
              <option value="default" disabled={true}>
                SELECT PROFESSION...
              </option>
              {this.props.filterOptions[1].options.map((profession) => (
                <option key={profession.key} value={profession.title}>
                  {profession.title}
                </option>
              ))}
            </select>
            {this.state.professionValues.map((profession, i) => (
              <span
                className="filters-selected-professions"
                key={`${profession}_${i}`}
              >
                {profession}
              </span>
            ))}
          </div>

          {checkboxData.map((obj) => (
            <Checkboxes
              title={obj.title}
              options={obj.options}
              key={obj.title}
            />
          ))}
          <button type="reset" onClick={this.handleReset}>
            Clear Filters
          </button>
          <button type="submit" onClick={this.handleFormSubmit}>
            Apply Filters
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filter,
});

const mapActionsToProps = { clearFilters };

export default connect(mapStateToProps, mapActionsToProps)(Filters);
