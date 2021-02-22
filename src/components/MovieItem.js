import React from "react";

function MovieItem({ movie }) {
  const divStyle = {
    width: "10rem",
  };
  return (
    <div className="card" style={divStyle}>
      <img src={movie.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <a href="#">More</a>
      </div>
    </div>
  );
}

export default MovieItem;
