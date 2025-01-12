import {useState} from "react";
import "milligram";

function App() {

  const movies_init = [
    {title: "Wall-E", year: "1999"},
    {title: "Pulp Fiction", year: "1998"},
    {title: "Matrix", year: "1997"},
    {title: "1670", year: "1996"},
  ];

  const [moviesList, setMoviesList] = useState(movies_init)
  const [title, setTitle] = useState('Wall-E');
  const [year, setYear] = useState([]);

  function TitleChange(event) {
    setTitle(event.target.value);
  };

  function YearChange(event) {
    setYear(event.target.value);
  };

  function displayList(movie) {
    return (
      <li key={movie.title}>{movie.title} ({movie.year})</li>
    )
  }

  function handleButton() {
    let message;
    if (year === "") {
      message = "Add year!!!";
      return alert(message)
    }

    if (title.length < 4) {
        message = "Title is to short.";
        return alert(message)
    } else if (title.length < 20) {
        const newList = moviesList.concat({ title, year });
        setMoviesList(newList);
    } else {
        message = "Title is to long";
        return alert(message)
    };
  }

  

  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>Titles</h2>
          <ul>{moviesList.map(displayList)}</ul>
          <h1>Add Movie {title} ({year})</h1>
          <h3>Title</h3>
          <input type="text" value={title} onChange={TitleChange}/>
          <h3>Year</h3>
          <input type="text" value={year} onChange={YearChange}/>
          <button type="button" onClick={handleButton}>Add film</button> 
      </div>
  );
}

export default App;