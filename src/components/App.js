import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function keepNotes(not) {
  return <Note title={not.title} content={not.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notes.map(keepNotes)}
      <Footer />
    </div>
  );
}

export default App;
