import React, { useState } from "react";

function SearchMovie({ setMovies }) {

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setMovies((movie) => [inputValue, ...movie,]);
      setInputValue("");
    }
  };

  return (
    <div className="container mt-2">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name movie"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="btn btn-outline-primary" type="submit">
            Load
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchMovie;
