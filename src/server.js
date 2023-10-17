// server.js
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const uri = 'mongodb+srv://Jarjajarr:jar180ok@cluster0001.shllyge.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/getData', async (req, res) => {
  try {
    await client.connect();
    const collection = client.db('spotify-clone').collection('album');
    const query = {}; // Your query goes here
    const data = await collection.find(query).toArray();
    res.json(data);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Failed to fetch data from MongoDB' });
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
