import {useState} from "react";

function App() {
  const [title, setTitle] = useState('Wall-E');

  function handleChange(event) {
    setTitle(event.target.value);
  }

  let message;
  if (title.length < 5) {
      message = "Tutuł jest za krótki. Nagrywają takie filmy?";
  } else if (title.length < 15) {
      message = "Tytuł jest ekstra, w sam raz na plakat przed kinem!";
  } else {
      message = "Tytuł jest za długi, nikt tego nie zapamięta.";
  };

  let length_mess;
  if (title.length > 1) { 
    length_mess = <div>{message}</div>;
    
  };

  const array1 = [1,4,9,16];
  
  const map1 = array1.map((x) => x*2);

  const movies = [
    {title: "Wall-E"},
    {title: "Pulp Fiction"},
    {title: "Matrix"},
    {title: "1670"},
  ];

  return (
      <div>
          <h1>My favourite movies to watch {map1}</h1>
          <h2>Titles</h2>
          <ul>{movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}</ul>
          <h2>My favourite movie for today is {title}</h2>
          <div>{length_mess}</div>
          <input type="text" value={title} onChange={handleChange}/>
          <button type="button" onClick={() => alert(title)}>Pokaż tytuł filmu</button> 
      </div>
  );
}

export default App;