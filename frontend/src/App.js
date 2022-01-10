import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function get() {
      let response = await fetch("/", {
        method: "GET",
      });
      let data = await response.json();
      setData(data);
    }

    get();
  }, []);

  return (
    <div className="App">
      <h1>SAS</h1>

      <ul>
        {data.map((part) => (
          <li key={part.id}>{`${part.latitude}, ${part.longitude}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
