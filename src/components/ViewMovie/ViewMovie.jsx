import React from "react";
import { useParams } from "react-router-dom";

export default function ViewMovie() {
  const params = useParams();
  return (
    <div
      className="movie-page"
      style={{
        backgroundImage: `url('/images/AVATAR.png')`,
      }}
    >
      <div className="left">
        <h1>DeadPool</h1>
        <p>
          In dolor fugiat ex minim aute dolor eiusmod duis mollit. In voluptate
          ut fugiat ut nostrud. Sunt aliqua esse irure proident. Consectetur
          nisi exercitation sunt ipsum.
        </p>
        <button>WATCH NOW</button>
      </div>
    </div>
  );
}
