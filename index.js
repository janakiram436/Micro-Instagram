require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Test the database connection and sync models
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully!');
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});