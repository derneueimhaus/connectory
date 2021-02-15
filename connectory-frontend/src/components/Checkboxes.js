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
      <div>
        <p>{title}</p>
        {options.map((option) => (
          <span key={option.key}>
            <label>{option.title}</label>
            <input
              id={option.key}
              type="checkbox"
              name={option.title}
              value={option.title}
              onClick={this.handleSelection}
            />
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
