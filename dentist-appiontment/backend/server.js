const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/dentistDB')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
const dentistRoutes = require('./routes/dentistRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

app.use('/api/dentists', dentistRoutes);
app.use('/api/appointments', appointmentRoutes);

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});