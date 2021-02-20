import React, { Component } from "react";

import { connect } from "react-redux";

import { checkUser } from "../utils/index";
import Loading from "../components/Loading";

export class NewTestimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const targetProfile = await fetch(
      `http://localhost:8080/shallowprofile/${this.props.match.params.userId}`
    ).then((res) => res.json());
    const currentUser = checkUser(
      this.props.user.userId,
      this.props.match.params.userId
    );
    this.setState({ targetProfile, currentUser });
  };

  checkUser = () =>
    parseInt(this.props.user.userId) ===
    parseInt(this.props.match.params.userId);

  render() {
    return (
      <div>
        {this.state.targetProfile ? (
          this.state.currentUser ? (
            <div>
              <h4>Write a testimonial for {this.state.targetProfile.name}</h4>
              <div>
                <img
                  className="settings-profile-img"
                  src={this.state.targetProfile.photo}
                  alt="Profile avatar"
                />
              </div>
            </div>
          ) : (
            "This is what you see if you're not the current user"
          )
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.login,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(NewTestimonial);
