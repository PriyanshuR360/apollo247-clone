require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const doctorRoutes = require('./routes/doctorRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/apollo247")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB Error:", err.message));

// Routes
app.get('/', (req, res) => {
  res.json({
    status: 'Backend is running!',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    available_routes: {
      doctors: '/api/doctors',
      // Add other routes here as you create them
    },
    timestamp: new Date().toISOString()
  });
});

app.use('/api', doctorRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});