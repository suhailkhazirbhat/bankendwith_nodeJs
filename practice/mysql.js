const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Middleware to parse JSON data
app.use(bodyParser.json());

// CREATE operation
app.post('/create', (req, res) => {
  const { name, email } = req.body;

  connection.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (error, results) => {
    if (error) throw error;
    res.json({ message: 'User created successfully', userId: results.insertId });
  });
});

// READ operation
app.get('/read/:id', (req, res) => {
  const userId = req.params.id;

  connection.query('SELECT * FROM users WHERE id = ?', [userId], (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});

// UPDATE operation
app.put('/update/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;

  connection.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, userId], (error) => {
    if (error) throw error;
    res.json({ message: 'User updated successfully' });
  });
});

// DELETE operation
app.delete('/delete/:id', (req, res) => {
  const userId = req.params.id;

  connection.query('DELETE FROM users WHERE id = ?', [userId], (error) => {
    if (error) throw error;
    res.json({ message: 'User deleted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
