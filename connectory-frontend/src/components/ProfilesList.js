import React, { Component } from "react";

import ProfileCard from "./ProfileCard";
import Pagination from "./Pagination";

import { connect } from "react-redux";

import { loadShallowProfiles } from "../redux/thunks";

import "../styles/ProfilesList.css";

export class ProfilesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilesList: "",
    };
  }

  componentDidMount = () => {
    this.props.loadShallowProfiles();
  };

  render() {
    return (
      <div className="profiles-container">
        {this.props.profilesList ? (
          "Looks like there's nothing here..."
        ) : (
          // <Pagination
          //   data={this.props.profilesList}
          //   RenderComponent={ProfileCard}
          //   title="Profiles"
          //   dataLimit={6}
          //   // pageLimit={5}
          // />
          <div>{this.props.profilesList[0].name}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  profilesList: state.profilesList,
});

const mapActionsToProps = {
  loadShallowProfiles,
};

export default connect(mapStateToProps, mapActionsToProps)(ProfilesList);
