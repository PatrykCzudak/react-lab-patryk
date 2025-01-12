import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";

function App() {

  const movies_init = [];

  const [moviesList, setMoviesList] = useState(movies_init)
  const [IsFormVisible, setIsFormVisible] = useState(false)

  function displayList(movie) {
    return (
      movies_init === [] ? <h3>Insert your movies</h3> : <li key={movie.title}>{movie.title} ({movie.year}) </li>
    )
  }

  function openAddFilm() {
    setIsFormVisible(!IsFormVisible)
  }

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
          <ul>{moviesList.map(displayList)}</ul>
          <button type="button" onClick={openAddFilm}>{IsFormVisible ? "Hide Form" : "Add a movie"}</button> 
          {IsFormVisible && <MovieForm onMovieSubmit={(movie) => setMoviesList([...moviesList, movie])} buttonLabel="Add a movie"/>}
      </div>
  );
}

export default App;