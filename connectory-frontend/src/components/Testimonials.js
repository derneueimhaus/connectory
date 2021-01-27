import React, { Component } from "react";

import "../styles/Testimonials.css";

import chrisPhoto from "../assets/chris.jpg";
import testPhoto from "../assets/blank.png";

const testimonialsData = {
  userId: 1,
  testimonials: [
    {
      testimonialId: 111,
      show: true,
      authorMember: true,
      authorPro: true,
      authorUserId: 7,
      authorName: "John Smith",
      authorTitle: "CEO",
      authorCompany: "Pro-Evo Technologies",
      text:
        "Hit the thumbs up in agreement of these changes or comment any questions or objections to this post asap. I'd like to update Joan later this afternoon on whether we're pursue the pre-recorded or live option.",
    },
    {
      testimonialId: 222,
      show: true,
      authorMember: false,
      authorPro: false,
      authorUserId: null,
      authorName: "Chris Evans",
      authorTitle: "Marketeer",
      authorCompany: "IBM",
      text:
        "Hit the thumbs up in agreement of these changes or comment any questions or objections to this post asap. I'd like to update Joan later this afternoon on whether we're pursue the pre-recorded or live option.",
    },
  ],
};

export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h4>Testimonials</h4>
          <button>Write a testimonial</button>
        </div>
        <div className="testimonials-body">
          {testimonialsData.testimonials.map((obj) => {
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
                      <span className="testimonial-badge">Pro</span>
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
