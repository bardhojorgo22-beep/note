"use client";
import { useEffect, useState } from "react";

export default function Notes() {
  const [newNote, setNewNote] = useState(""); // what the user is currently typing
  const [notes, setNotes] = useState([]); // the full list of notes to display
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postError, setPostError] = useState(null);

  // runs once on page load — fetches the existing notes from backend
  useEffect(() => {
    fetch("/api/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data.notes);
        setIsLoading(false);
      }) // save the notes list to state
      .catch((err) => {
        setError("failed to load notes");
        setIsLoading(false);
      });
  }, []);

  // runs when user clicks submit — sends new note to backend
  function handleSubmit() {
    fetch("/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note: newNote }), // send what user typed
    })
      .then((res) => res.json())
      .then((data) => setNotes([...notes, data.note])) // add new note to existing list
      .catch((err) => {
        setPostError("Failed to submit data");
      });
  }

  if (error) return <p> {error}</p>;
  if (isLoading) return <p>is loading</p>;
  return (
    <div>
      {/* display all notes */}
      {notes.map((note, index) => (
        <h1 key={index}>{note}</h1>
      ))}

      {/* input for new note */}
      <input
        onChange={(e) => setNewNote(e.target.value)}
        placeholder="type a new note"
      />

      {/* button to submit */}
      <button onClick={handleSubmit}>Add Note</button>
      {postError && <p>{postError}</p>}
    </div>
  );
}
