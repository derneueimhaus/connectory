import React, { Component } from "react";

import { connect } from "react-redux";
import {
  toggleFilterOption,
  clearFilters,
} from "../redux/actions/filterActions";

class Checkboxes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSelection = (event) => {
    console.log(event.target.checked);
    this.props.toggleFilterOption({
      id: event.target.id,
      checked: event.target.checked,
    });
  };

  componentWillUnmount = () => {
    this.props.clearFilters();
  };

  render() {
    const { title, options } = this.props;
    return (
      <div className="filter-checkbox-container">
        <p className="filter-label">{title}</p>
        {options.map((option) => (
          <span className="filter-box-label" key={option.key}>
            <input
              id={option.key}
              type="checkbox"
              name={option.title}
              value={option.title}
              onClick={this.handleSelection}
            />
            <span className="checkmark"></span>
            <label htmlFor={option.key}>{option.title}</label>
          </span>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filters: state.filter,
});

const mapActionsToProps = { toggleFilterOption, clearFilters };

export default connect(mapStateToProps, mapActionsToProps)(Checkboxes);
