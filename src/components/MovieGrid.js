import React from "react";
import { useFetch } from "../hooks/useFetch";
import MovieItem from "./MovieItem";

function MovieGrid({ movie }) {
  const { data, loading } = useFetch(movie);
console.log('desde grid',data)
  return (
    <div className="container mt-2">
      <h4>Grid movie: {movie}</h4>

      {loading && <p>Loading</p>}
      <div className="card-grid">
        {data.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;
