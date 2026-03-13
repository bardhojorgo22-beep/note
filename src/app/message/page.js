"use client";

import { useState } from "react";

export default function Message() {
  const [input, setInput] = useState("");
  const [res, setRes] = useState("");

  function handleSubmit() {
    fetch("/api/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    })
      .then((res) => res.json())
      .then((data) => setRes(data.message));
  }

  return (
    <div>
      <label>whats yo name</label>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSubmit}>Send</button>
      <p>{res}</p>
    </div>
  );
}
