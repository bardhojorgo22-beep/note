"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [mes, setMes] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((mes) => setMes(mes.message));
  }, []);

  return <div>{mes}</div>;
}
