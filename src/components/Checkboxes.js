import React, { Component } from "react";

import { connect } from "react-redux";
import { toggleFilterOption } from "../redux/actions/filterActions";

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

  render() {
    const { title, options } = this.props;
    return (
      <div>
        <p>{title}</p>
        {options.map((option) => (
          <span key={option.key}>
            <label>{option.option}</label>
            <input
              id={option.key}
              type="checkbox"
              name={option.option}
              value={option.option}
              onClick={this.handleSelection}
            />
          </span>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapActionsToProps = { toggleFilterOption };

export default connect(mapStateToProps, mapActionsToProps)(Checkboxes);
