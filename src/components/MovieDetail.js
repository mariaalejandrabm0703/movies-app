import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../helpers/getData";

function MovieDetail() {
  const { movieId } = useParams();

  const [state, setState] = useState({});

  useEffect(() => {
    getMovieById(movieId).then((data) => {
      setState(data);
    });
  }, [movieId]);

  const { title, year, plot, length, rating, rating_votes, trailer } = state;

  return (
    <div className="container">
      <h1>Movie details</h1>
      <hr />
      {title ? (
        <>
          <p>
            title: {title}({year})
          </p>
          {plot && <p>plot: {plot}</p>}
          {length && <p>length: {length}</p>}
          {rating && <p>rating: {rating}</p>}
          {rating_votes && rating_votes >= 0 && (
            <p>rating_votes: {rating_votes}</p>
          )}
          {trailer.link && trailer.link !== "" &&(
            <a target="_blank" href={trailer.link}>
              ¡trailer!
            </a>
          )}
        </>
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default MovieDetail;
