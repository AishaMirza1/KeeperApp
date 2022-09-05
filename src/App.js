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
  return (
    <div className="container">
      <Header />
      <CreateArea onAdd={handleAdd} />
      <main className="notes-container">
        {notes.map((note, index) => {
          return <Note key={index} title={note.title} text={note.note} />;
        })}
      </main>
      <Footer />
    </div>
  );
}

export default App;
