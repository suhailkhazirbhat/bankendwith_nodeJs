const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const port = 3000;

// Connection URL and Database Name
const url = 'mongodb://localhost:27017';
const dbName = 'your_database';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Use connect method to connect to the Server
client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB: ' + err);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db(dbName);

  // Middleware to parse JSON data
  app.use(bodyParser.json());

  // CREATE operation
  app.post('/create', async (req, res) => {
    const { name, email } = req.body;

    const result = await db.collection('users').insertOne({ name, email });

    res.json({ message: 'User created successfully', userId: result.insertedId });
  });

  // READ operation
  app.get('/read/:id', async (req, res) => {
    const userId = req.params.id;

    const user = await db.collection('users').findOne({ _id: ObjectId(userId) });

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

  // UPDATE operation
  app.put('/update/:id', async (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;

    const result = await db.collection('users').updateOne(
      { _id: ObjectId(userId) },
      { $set: { name, email } }
    );

    if (result.modifiedCount > 0) {
      res.json({ message: 'User updated successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

  // DELETE operation
  app.delete('/delete/:id', async (req, res) => {
    const userId = req.params.id;

    const result = await db.collection('users').deleteOne({ _id: ObjectId(userId) });

    if (result.deletedCount > 0) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});

// Close the MongoDB connection when the Node.js process is terminated
process.on('SIGINT', () => {
  client.close();
  process.exit();
});
