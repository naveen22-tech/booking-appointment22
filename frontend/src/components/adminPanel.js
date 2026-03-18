import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/appointments')
      .then(res => setAppointments(res.data));
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Date</th>
            <th>Dentist</th>
            <th>Clinic</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(a => (
            <tr key={a._id}>
              <td>{a.patientName}</td>
              <td>{a.age}</td>
              <td>{a.gender}</td>
              <td>{a.date}</td>
              <td>{a.dentistName}</td>
              <td>{a.clinic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;