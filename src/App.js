import {useState} from "react";
//import "milligram";
import MovieForm from "./MovieForm";
import "./index.css"

function App() {

  const moviesInit = [];

  const [moviesList, setMoviesList] = useState(moviesInit)
  const [IsFormVisible, setIsFormVisible] = useState(false)

  function displayList(movie) {
    return (
      <li key={movie.title}>{movie.title} ({movie.year}) </li>
    )
  }

  function openAddFilm() {
    setIsFormVisible(!IsFormVisible)
  }

  return (
      <div className="app-container">
          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
          {moviesList.length === 0 ? <h4>Insert your movies</h4> : <ul>{moviesList.map(displayList)}</ul>}
          <button type="button" className="toggle-form" onClick={openAddFilm}>{IsFormVisible ? "Hide Form" : "Add a movie"}</button> 
          {IsFormVisible && <MovieForm onMovieSubmit={(movie) => setMoviesList([...moviesList, movie])} buttonLabel="Add a movie"/>}
      </div>
  );
}

export default App;