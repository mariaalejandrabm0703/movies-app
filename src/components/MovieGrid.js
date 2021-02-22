import React from "react";
import { useFetch } from "../hooks/useFetch";
import MovieItem from "./MovieItem";

function MovieGrid({ movie }) {
  const { data, loading } = useFetch(movie);

  return (
    <div className="container mt-2">
      <h3>{movie}:</h3>

      {loading && <p>Loading</p>}
      <div className="card-group">
        {data.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;
