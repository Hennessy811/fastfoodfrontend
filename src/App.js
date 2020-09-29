import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(
      "https://mock-api-builder.vercel.app/api/schema/get/5f736ec7fbf280000832750e"
    )
      .then((r) => r.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data.length) return <div>Loading...</div>;

  return (
    <div className="App">
      {data.map((i) => (
        <div key={i.name}>{i.name}</div>
      ))}
    </div>
  );
}

export default App;
