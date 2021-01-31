import React, { Component } from "react";

import ProfileCard from "./ProfileCard";

import "../styles/ProfilesList.css";
import Pagination from "./Pagination";

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
    return (
      <div className="profiles-container">
        {this.state.profilesList && (
          // this.state.profilesList.map((element, i) => (
          //   <Link
          //     className="profile-links"
          //     key={i}
          //     to={`/profile/${element.userId}`}
          //   >
          //     <ProfileCard
          //       name={element.name}
          //       profession={element.profession}
          //       email={element.email}
          //       telephone={element.telephone}
          //       website={element.website}
          //       photo={element.photo}
          //     />
          //   </Link>
          // ))}
          <Pagination
            data={this.state.profilesList}
            RenderComponent={ProfileCard}
            title="Profiles"
            dataLimit={6}
            // pageLimit={5}
          />
        )}
      </div>
    );
  }
}
