import Header from "./components/header";
import Footer from "./components/footer";
import { Note } from "./components/note";
import { useState } from "react";
import CreateArea from "./components/createArea";
function App() {
  const [notes, setnotes] = useState([]);
  function handleAdd(newNote) {
    setnotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  function deleteNote(id) {
    setnotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container ">
      <Header />
      <CreateArea onAdd={handleAdd} />
      <main className="notes-container">
        {notes.map((note, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={note.title}
              text={note.note}
              onDelete={deleteNote}
            />
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
