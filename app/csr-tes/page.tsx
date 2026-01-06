"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((r) => r.json())
      .then(setData);
  }, []);

  return <div>{data.length}</div>;
}
    