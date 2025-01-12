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
  }
      title.length > 0 && <div>{message}</div>


  return (
      <div>
          <h1>My favourite movies to watch</h1>
          <h2>My favourite movie for today is {title}</h2>
          <div>{message}</div>
          <input type="text" value={title} onChange={handleChange}/>
          <button type="button">Pokaż tytuł filmu</button> 
      </div>
  );
}

export default App;