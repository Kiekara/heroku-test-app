import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function get() {
      let response = await fetch("/locations", {
        method: "GET",
      });
      let data = await response.json();
      setData(data);
    }

    get();
  }, []);

  return (
    <div className="App">
      <h1>Locations</h1>
      <p>locations currently in the database</p>

      <ul>
        {data.map((part) => (
          <li key={part.id}>{`${part.latitude}, ${part.longitude}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
