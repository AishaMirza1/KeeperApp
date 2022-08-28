import Header from "./components/header";
import Footer from "./components/footer";
import { Note } from "./components/note";
import Notesdata from "./notesData";

function App() {
  const notesEl = Notesdata.map((note) => {
    return <Note title={note.title} content={note.content} />;
  });

  return (
    <div className="container">
      <Header />
      <main className="notes-container">{notesEl}</main>
      <Footer />
    </div>
  );
}

export default App;
