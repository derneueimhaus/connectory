import React, { Component } from "react";

import { connect } from "react-redux";
import {
  addSignupEmail,
  addSignupFirstName,
  addSignupLastName,
  addSignupPassword,
  addSignupConfirm,
} from "../redux/actions/signupActions";

class SignUpOne extends Component {
  handleSubmitInfo = async (e) => {
    e.preventDefault();
    const newProfile = await fetch(`http://localhost:8080/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userInfo: {
          name: `${this.props.signup.firstName} ${this.props.signup.lastName}`,
          title: "",
          pro: false,
          description: "",
          location: "",
          email: this.props.signup.email,
          telephone: "",
          website: "",
          profession: "",
          photo:
            "data:image/jpeg;base64,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",
        },
        testimonials: {},
        projects: [],
        experience: [],
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    this.props.setUserId(newProfile.id);
    // this.props.nextScreen(true);
  };

  render() {
    return (
      <div className="signup-one-container">
        <div className="signup-page-header">
          <h1>Connect with us.</h1>
          <h4>SIGN IN TO OUR DIGITAL WORKSPACE</h4>
        </div>
        <div className="signup-form-container">
          <div className="signup-form">
            <form onSubmit={this.handleSubmitInfo}>
              <input
                id="input-first-name"
                className="signup-input input-first-name"
                type="text"
                placeholder="FIRST NAME"
                onChange={(e) => this.props.addSignupFirstName(e.target.value)}
                required
              />
              <input
                id="input-last-name"
                className="signup-input input-last-name"
                type="text"
                placeholder="LAST NAME"
                onChange={(e) => this.props.addSignupLastName(e.target.value)}
                required
              />
              <input
                id="input-email"
                className="signup-input input-email"
                type="email"
                placeholder="EMAIL"
                onChange={(e) => this.props.addSignupEmail(e.target.value)}
                required
              />
              <p>
                Please use the same email addres as your registered Change=
                account. Don't have a Change= account?{" "}
                <a href="https://www.change-is.com/nl/living" targt="_blank">
                  Click here to make one
                </a>
              </p>
              <input
                id="input-password"
                className="signup-input input-password"
                type="password"
                placeholder="CHANGE= PASSWORD"
                onChange={(e) => this.props.addSignupPassword(e.target.value)}
                required
              />
              <input
                id="input-password-confirm"
                className="signup-input input-password"
                type="password"
                placeholder="CONFIRM PASSWORD"
                onChange={(e) => this.props.addSignupConfirm(e.target.value)}
                required
              />
              <input type="submit" value="Sign Up" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  signup: state.signup,
});

const mapActionsToProps = {
  addSignupEmail,
  addSignupFirstName,
  addSignupLastName,
  addSignupPassword,
  addSignupConfirm,
};

export default connect(mapStateToProps, mapActionsToProps)(SignUpOne);
