import React, { Component } from "react";

import { connect } from "react-redux";
import {
  addSignupEmail,
  addSignupFirstName,
  addSignupLastName,
  addSignupPassword,
  addSignupConfirm,
} from "../redux/actions/signupActions";

export class SignUpOne extends Component {
  render() {
    return (
      <div className="signup-one-container">
        <div className="signup-page-header">
          <h1>Connect with us.</h1>
          <h4>SIGN IN TO OUR DIGITAL WORKSPACE</h4>
        </div>
        <div className="signup-form-container">
          <div className="signup-form">
            <form>
              <input
                id="input-first-name"
                className="signup-input input-first-name"
                type="text"
                defaultValue="FIRST NAME"
                onChange={(e) => this.props.addSignupFirstName(e.target.value)}
              />
              <input
                id="input-last-name"
                className="signup-input input-last-name"
                type="text"
                defaultValue="LAST NAME"
                onChange={(e) => this.props.addSignupLastName(e.target.value)}
              />
              <input
                id="input-email"
                className="signup-input input-email"
                type="email"
                defaultValue="EMAIL"
                onChange={(e) => this.props.addSignupEmail(e.target.value)}
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
                type="text"
                defaultValue="CHANGE= PASSWORD"
                onChange={(e) => this.props.addSignupPassword(e.target.value)}
              />
              <input
                id="input-password"
                className="signup-input input-password"
                type="text"
                defaultValue="CONFIRM PASSWORD"
                onChange={(e) => this.props.addSignupConfirm(e.target.value)}
              />
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
