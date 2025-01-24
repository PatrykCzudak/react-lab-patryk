import {useState} from "react";
import "./index.css"

export default function MovieForm(props) {
    const [title, setTitle] = useState("");
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
        <div className="form-container">
            <h2 className="form-header">Add Movie</h2>
            <from className="form-content" onSubmit={handleForm}>
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-input" placeholder="Insert Movie Title" value={title} onChange={TitleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="year" className="form-label">Year</label>
                    <input type="text" className="form-input" placeholder="1999" value={year} onChange={YearChange}/>
                </div>
                <button type="button" className="submit-button" onClick={handleForm}>Add a movie</button> 
            </from>    
        </div>  
    );
}
    