import React from "react";

export default function Explanations({ data }) {
  return (
    <div>
      <h4>Experience</h4>
      {data.map((obj) => (
        <div>
          <p>
            {obj.title} - {obj.company}
          </p>
          <p>{obj.description}</p>
        </div>
      ))}
    </div>
  );
}
