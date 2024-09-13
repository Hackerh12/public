const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/search', async (req, res) => {
  const { query } = req.query;
  const url = 'https://www.omdbapi.com/';
  const params = {
    s: query,
    apikey: '48b9b3c0'
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