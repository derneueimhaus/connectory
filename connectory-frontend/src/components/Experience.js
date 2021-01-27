import React from "react";

export default function Experience({ data }) {
  return (
    <div>
      <h4>Experience</h4>
      {data.map((obj) => (
        <div key={obj.expId}>
          <p>
            {obj.title} - {obj.company}
          </p>
          <p>{obj.description}</p>
        </div>
      ))}
    </div>
  );
}
