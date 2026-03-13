"use client";
import { useEffect, useState } from "react";

export default function Mongodb() {
  const [existing, setExisting] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function DeleteNote(id) {
    fetch("/api/mongodb", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).then(() => {
      setExisting(existing.filter((doc) => doc._id !== id));
    });
  }

  useEffect(() => {
    fetch("/api/mongodb")
      .then((res) => res.json())
      .then((data) => {
        setExisting(data.notes);
        setIsLoading(false);
      });
  }, []);

  function SubmitNotes() {
    if (!newNote.trim()) return;
    fetch("/api/mongodb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note: newNote }),
    })
      .then((res) => res.json())
      .then((data) => {
        setExisting([...existing, { note: data.note, _id: data._id }]);

        setNewNote("");
      });
  }

  return (
    <div
      style={{
        maxWidth: "520px",
        margin: "60px auto",
        padding: "0 1rem",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "22px", fontWeight: "500", marginBottom: "24px" }}>
        Notes
      </h1>

      <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
        <input
          value={newNote}
          placeholder="Write a note..."
          onChange={(e) => setNewNote(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && SubmitNotes()}
          style={{
            flex: 1,
            padding: "10px 14px",
            fontSize: "14px",
            border: "0.5px solid #ccc",
            borderRadius: "8px",
            outline: "none",
          }}
        />
        <button
          onClick={SubmitNotes}
          style={{
            padding: "10px 18px",
            fontSize: "14px",
            background: "#111",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {isLoading ? (
        <p style={{ color: "#888", fontSize: "14px" }}>Loading...</p>
      ) : existing.length === 0 ? (
        <p style={{ color: "#888", fontSize: "14px" }}>No notes yet.</p>
      ) : (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {existing.map((doc, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                border: "0.5px solid #e0e0e0",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            >
              <span>{doc.note}</span>
              <button
                onClick={() => DeleteNote(doc._id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#999",
                  cursor: "pointer",
                  fontSize: "16px",
                  padding: "0 4px",
                }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
