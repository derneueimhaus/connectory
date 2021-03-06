import React, { Component } from "react";

import ProfileCard from "./ProfileCard";

import "../styles/ProfilesList.css";
import Pagination from "./Pagination";
import Loading from "./Loading";

export default class ProfilesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profilesList: "",
    };
  }

  componentDidMount = async () => {
    const profilesList = await fetch(
      "http://localhost:8080/shallowprofile"
    ).then((res) => res.json());
    this.setState({ profilesList });
  };

  render() {
    return this.state.profilesList ? (
      <Pagination
        data={this.state.profilesList}
        RenderComponent={ProfileCard}
        dataLimit={6}
        // pageLimit={5}
      />
    ) : (
      <Loading />
    );
  }
}
