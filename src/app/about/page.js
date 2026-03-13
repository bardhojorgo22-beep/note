"use client";

import { useState } from "react";

export default function About() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>raise count fam </button>
      <p> {count}</p>
    </div>
  );
}
