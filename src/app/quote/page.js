"use client";
import { useState, useEffect } from "react";

export default function RandomQuote() {
  const [randomizer, setRandomizer] = useState("");
  const [name, setName] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    fetch("/api/quote")
      .then((res) => res.json())
      .then((data) => {
        setRandomizer(data.quote);
      });
  }, []);
  function Fetch() {
    fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => res.json())
      .then((data) => setResponseMsg(data.message));
  }
  return (
    <div>
      {randomizer} <br></br>
      <button onClick={Fetch}>submit your name </button>
      <input onChange={(e) => setName(e.target.value)}></input>
      <br></br>
      {responseMsg}
    </div>
  );
}
