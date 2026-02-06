import React, { useState } from "react";

function App() {

  const [patients, setPatients] = useState([]);

  const getData = () => {
    fetch("http://localhost:5000/patients")
      .then(res => res.json())
      .then(data => setPatients(data))
      .catch(err => console.error(err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hospital Management System</h1>

      <button onClick={getData}>Get Data</button>

      <br /><br />

      {patients.map(p => (
        <div key={p.id}>
          {p.name} | {p.age} | {p.disease}
        </div>
      ))}
    </div>
  );
}

export default App;

