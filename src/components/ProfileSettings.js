import React, { Component } from "react";
import { connect } from "react-redux";

export class ProfileSettings extends Component {
  render() {
    return (
      <div>
        <input type="text" value="John Smith" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(ProfileSettings);
