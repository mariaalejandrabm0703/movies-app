
import React,{useState} from 'react'
import MovieGrid from './components/MovieGrid';
import SearchMovie from './components/SearchMovie'

function App() {

  const [movies, setMovies] = useState([]);

  return (
    <div className="container mt-2">
            <h2>Search movies App</h2>
            <hr/>
            <SearchMovie setMovies={ setMovies } />
            <hr />

            <ol>
                {
                    movies.map( (movie)  => (
                        <MovieGrid 
                            key={ movie }
                            movie={ movie }
                        />
                    ))
                }
            </ol>

        </div>
  );
}

export default App;
