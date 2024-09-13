require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/search', async (req, res) => {
  const { query } = req.query;
  const url = 'https://www.omdbapi.com/';
  const params = {
    s: query,
    apikey: process.env.OMDB_API_KEY // Use the environment variable
  };

  try {
    const response = await axios.get(url, { params });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
