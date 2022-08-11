import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")))
  const [activeNote,setActiveNote] = useState(false)

  const onAddNotes = () => {
    const newNote = {
      id: uuidv4(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now()
    }
    setNotes([...notes, newNote])
    setActiveNote(newNote.id)
    localStorage.setItem("notes",JSON.stringify([...notes, newNote]))
  }

  const onDeleteNote = (id) => {
    const newNotes = notes.filter(item=>item.id !== id)
    setNotes(newNotes)
    localStorage.setItem("notes",JSON.stringify(newNotes))
  }

  const onEditNote = (editNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === editNote.id) {
        return editNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
    localStorage.setItem("notes",JSON.stringify(updatedNotesArr))
  }

  const getActiveNote = () => {
    return notes.find(item=>item.id===activeNote)
  }

  return (
    <div className="App">
      <Sidebar
        onAddNotes={onAddNotes}
        notes={notes}
        onDeleteNote={onDeleteNote}
        setActiveNote={setActiveNote}
        activeNote={activeNote}
      />
      <Main
        activeNote={getActiveNote()}
        onEditNote={onEditNote}
      />
    </div>
  );
}

export default App;
