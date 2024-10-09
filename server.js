// server.js
const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');
const app = express();

// Load environment variables
dotenv.config();

// Create MySQL connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: kwekuamissah1@1,
  database: process.env.DB_NAME
});

// Test the database connection
db.getConnection((err, connection) => {
  if (err) throw err;
  console.log('Connected to MySQL Database');
  connection.release();
});

// Set up express server to parse JSON
app.use(express.json());

// Endpoints go here

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
