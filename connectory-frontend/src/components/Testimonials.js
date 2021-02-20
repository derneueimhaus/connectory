import React, { Component } from "react";

import "../styles/Testimonials.css";

import chrisPhoto from "../assets/chris.jpg";
import testPhoto from "../assets/blank.png";
import badge from "../assets/pro-badge.png";
import { Link } from "react-router-dom";

export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h4>Testimonials</h4>
          <Link to={`/new-testimonial/${this.props.userId}`}>
            <button>Write a testimonial</button>
          </Link>
        </div>
        <div className="testimonials-body">
          {this.props.data.map((obj) => {
            if (obj.show === true) {
              return (
                <div className="single-testimonial" key={obj.testimonialId}>
                  <div className="photo-badge">
                    <img
                      className="testimonial-img"
                      src={obj.authorMember ? chrisPhoto : testPhoto}
                      alt={obj.authorName}
                    />
                    {obj.authorPro && (
                      <img
                        className="testimonial-badge"
                        src={badge}
                        alt="Change=Pro"
                      />
                    )}
                  </div>
                  <div className="testimonial-text">
                    <p>
                      <em>"{obj.text}"</em>
                    </p>
                    <p>
                      <strong>
                        {obj.authorName} - {obj.authorTitle} at{" "}
                        {obj.authorCompany}
                      </strong>
                    </p>
                  </div>
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    );
  }
}
