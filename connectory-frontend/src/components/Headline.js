import React, { useEffect, useState } from "react";

export default function Headline() {
  const [headline, setHeadline] = useState({});
  const [fetched, setFetched] = useState(false);

  async function fetchHeadline() {
    const headlineData = await fetch("http://localhost:8080/headlines?_limit=1")
      .then((res) => res.json())
      .catch((err) => console.log(err));
    setHeadline(headlineData[0]);
    setFetched(true);
  }

  useEffect(() => {
    fetchHeadline();
  }, []);
  return fetched ? (
    <div className="headline" id="headline">
      <span>
        <strong>{headline.headline}</strong>
      </span>{" "}
      <span>{headline.subheader}</span>{" "}
      <a href={headline.hyperlinkUrl}>{headline.hyperlinkText}</a>
    </div>
  ) : null;
}
