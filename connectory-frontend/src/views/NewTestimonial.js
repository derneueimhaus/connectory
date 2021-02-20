import React, { Component } from "react";

import { connect } from "react-redux";
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
    this.setState({ targetProfile });
  };

  render() {
    return (
      <div>
        {this.state.targetProfile ? (
          <h4>
            This is the New Testimonials page for user{" "}
            {this.props.match.params.userId}
          </h4>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(NewTestimonial);
