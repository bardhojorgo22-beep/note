"use client";
import { useState } from "react";

export default function CheckAge() {
  const [age, setAge] = useState(0);
  const [res, setRes] = useState("");
  function Handle() {
    fetch("/api/age", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ age: age }),
    })
      .then((res) => res.json())
      .then((data) => setRes(data.message));
  }
  return (
    <div>
      <input onChange={(e) => setAge(e.target.value)} />
      <button onClick={Handle}>checkage</button>
      <p>{res}</p>
    </div>
  );
}
