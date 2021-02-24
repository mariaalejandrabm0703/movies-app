import React from "react";
import { useFetch } from "../hooks/useFetchMovies";
import MovieItem from "./MovieItem";

function MovieGrid({ movie }) {
  const { data, loading } = useFetch(movie);

  return (
    <div className="container mt-2">
      <h3>{movie}:</h3>

      {loading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {data.length !== 0 ? (
          data.map((movie) => <MovieItem prueba={true} key={movie.id} movie={movie} />)
        ) : (
          <p>There are no data ...</p>
        )}
      </div>
    </div>
  );
}

export default MovieGrid;
