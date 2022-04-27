import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import NoteCard from "./components/NoteCard/NoteCard";
import "./App.css";



function App() {
  const [notes, setNotes] = useState([]);
  const [isReload, setIsReload] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);



  /*
1. here there will be a function named handleSearch
to handle search by query, and it will be passed as props to header
  */

  const handleSearch = (event) => {
    event.preventDefault();
    const queryText = event.target.searchText.value;

    if (queryText) {
      fetch(`http://localhost:4000/notes?userName=${queryText}`)
        .then((res) => res.json())
        .then((data) => setNotes(data));
    }
    if (queryText) {
      fetch(`http://localhost:4000/notes?topicName=${queryText}`)
        .then((res) => res.json())
        .then((data) => setNotes(data));
    }
  };



  /*
2. here there will be a function named handleDelete
to delete a note, and it will be passed as props to NoteCard that will be triggered using delete button.
 */

  const handleDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:4000/note/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setIsReload(!isReload);
      });
  };



  /*
3. for updating data you need to pass isReload, setISReload as props to NodeCard component
 */

  /*
4.  there will be a function named handlePost
to post data to backend, and it will be passed as props to InputFrom.
 */

  const handlePost = (event) => {
    event.preventDefault();
    const userName = event.target.userName.value;
    const textData = event.target.textData.value;
    const topicName = event.target.topicName.value;

    console.log({ userName, textData });

    fetch("http://localhost:4000/note", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({ userName, textData, topicName }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setIsReload(!isReload);
      });
  };




  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      <InputForm handlePost={handlePost} />
      <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
        {notes.map((note) => (
          <NoteCard
            note={note}
            handleDelete={handleDelete}
            key={note._id}
            setIsReload={setIsReload}
            isReload={isReload}
          />
        ))}
      </div>
    </div>
  );
}

export default App;