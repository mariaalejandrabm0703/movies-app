import React, { useState } from "react";

import MovieGrid from "./MovieGrid";
import SearchMovie from "./SearchMovie";

function App() {
  const [movies, setMovies] = useState(["world"]);

  return (
    <div className="container mt-2">
      <h2>Search movies App</h2>
      <hr />
      <SearchMovie setMovies={setMovies} />
      <hr />

      <ol>
        {movies.map((movie) => (
          <MovieGrid key={movie} movie={movie} />
        ))}
      </ol>
    </div>
  );
}

export default App;
