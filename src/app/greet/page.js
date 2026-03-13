"use client";
import { useState } from "react";

export default function Greet() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  function handleSubmit() {
    fetch("/api/greet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => res.json())
      .then((data) => setGreeting(data.greeting));
  }

  return (
    <div>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="type your name"
      />
      <button onClick={handleSubmit}>Greet me</button>
      <p>{greeting}</p>
    </div>
  );
}
