
import React,{useState} from 'react'
import MovieGrid from './components/MovieGrid';
import SearchMovie from './components/SearchMovie'

function App() {

  const [movies, setMovies] = useState(['Men in black', 'Princess']);

  return (
    <div className="container mt-2">
            <h2>Search movies App</h2>
            <hr/>
            <SearchMovie setMovies={ setMovies } />
            <hr />

            <ol>
                {
                    movies.map( (movie, i)  => (
                        <MovieGrid 
                            key={ i }
                            movie={ movie }
                        />
                    ))
                }
            </ol>

        </div>
  );
}

export default App;
