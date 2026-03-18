import React, { useState } from 'react';
import DentistList from './components/dentistList';
import BookAppointment from './components/bookAppointment';
import AdminPanel from './components/adminPanel';

function App() {
  const [selectedDentist, setSelectedDentist] = useState(null);

  return (
    <div>
      {!selectedDentist ? (
        <DentistList onBook={setSelectedDentist} />
      ) : (
        <BookAppointment dentist={selectedDentist} />
      )}

      <AdminPanel />
    </div>
  );
}

export default App;