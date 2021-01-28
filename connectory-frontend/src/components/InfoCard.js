import React, { Component } from "react";

import "../styles/InfoCard.css";

export default class InfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    return (
      <div className="info-card-container">
        <div className="basic-info">
          <img className="profile-img" src={data.photo} alt={data.name} />
          <h4>{data.name}</h4>
          <h5>{data.title}</h5>
        </div>
        <div className="details">
          <p>{data.description}</p>
          <span>{data.pro && "Pro"}</span>
          <hr style={{ border: "solid 1px purple" }} />
          <div className="below-line">
            <div className="contact">
              <h5>Contact</h5>
              <p>{data.location}</p>
              <p>{data.telephone}</p>
              <p>{data.email}</p>
              <p>
                <a href={`https://${data.website}`}>{data.website}</a>
              </p>
            </div>
            <div className="featured-exp">
              <p>{data.profession}</p>
              <hr style={{ border: "solid 1px white" }} />
              <p>Featured Experience:</p>
              <h5>
                {data.featured.title}, {data.featured.company}
              </h5>
              <p>{data.featured.years}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
