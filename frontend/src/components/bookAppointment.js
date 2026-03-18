import React, { useState } from 'react';
import axios from 'axios';

function BookAppointment({ dentist }) {
  const [form, setForm] = useState({
    patientName: '',
    age: '',
    gender: '',
    date: ''
  });

  const handleSubmit = () => {
    axios.post('http://localhost:5000/api/appointments', {
      ...form,
      dentistName: dentist.name,
      clinic: dentist.clinic
    }).then(() => alert("Appointment Booked"));
  };

  return (
    <div>
      <h2>Book Appointment with {dentist.name}</h2>

      <input placeholder="Name" onChange={e => setForm({...form, patientName: e.target.value})} />
      <input placeholder="Age" onChange={e => setForm({...form, age: e.target.value})} />
      <input placeholder="Gender" onChange={e => setForm({...form, gender: e.target.value})} />
      <input type="date" onChange={e => setForm({...form, date: e.target.value})} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BookAppointment;