import {useState} from "react";

export default function MovieForm(props) {
    const [title, setTitle] = useState("Type your title");
    const [year, setYear] = useState("");
    
    function TitleChange(event) {
        setTitle(event.target.value);
    };

    function YearChange(event) {
        setYear(event.target.value);
    };
    
    function handleForm(event) {
        event.preventDefault();
        if (year === "") {
            return alert("Insert year!!!")
        } else if (title === "") {
            return alert("Insert title!!!")
        } else if (title.length < 4) {
            return alert("Title is to short.")
        } else if (title.length < 20) {
            props.onMovieSubmit({title, year});
            setTitle("");
            setYear("");
        } else {
            return alert("Title is to long")
        };
    }

      return (
        <from onSubmit={handleForm}>
            <h2>Add Movie</h2>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={TitleChange}/>
            </div>
            <div>
                <label>Year</label>
                <input type="text" value={year} onChange={YearChange}/>
            </div>
            <button type="button" onClick={handleForm}>Add a movie</button> 
        </from>      
    );
}
    