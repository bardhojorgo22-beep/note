"use client";
import { useState, useEffect } from "react";

export default function Profile() {
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch("/api/user")
      .then((x) => x.json())
      .then((res) => {
        setDetails(res);
      });
  }, []);
  return (
    <div>
      <p>{details.name}</p>
      <p>{details.age}</p>
      <p>{details.city}</p>
    </div>
  );
}
