import React from "react";
import { Link } from 'react-router-dom';

function MovieItem({ movie, prueba = false }) {

 

  const divStyle = {
    width: "10rem",
  };
  return (
    <div className="card" style={divStyle}>
      <img src={movie.image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
  
        <Link to={`./movie/${movie.id}`}  target="_blank">More...</Link>
      </div>
    </div>
  );
}

export default MovieItem;
