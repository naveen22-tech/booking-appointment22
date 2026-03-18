import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DentistList({ onBook }) {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/dentists')
      .then(res => setDentists(res.data));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" , justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <h2>Dentists</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {dentists.map(d => (
        <div key={d._id} style={{border: "1px solid gray", margin: "10px", display: "flex", flexDirection: "column", alignItems: "center", padding: "10px"}}>
          <img src={d.image} width="100" alt="" />
          <h3>{d.name}</h3>
          <p>{d.qualification}</p>
          <p>{d.experience} years</p>
          <p>{d.clinic}</p>
          <button onClick={() => onBook(d)}>Book</button>
        </div>
      ))}
        </div>
    </div>
  );
}

export default DentistList;