import React from 'react'
import MovieItem from './MovieItem'

function MovieGrid({movie}) {
    return (
        <div className="container mt-2">
        <h4>Grid movie: {movie}</h4>
        <MovieItem/>
        </div>
    )
}

export default MovieGrid
