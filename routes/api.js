const express = require('express');
const axios = require('axios');
const router = express.Router();

// Fetch Bitcoin Price
router.get('/bitcoin', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'bitcoin',
        vs_currencies: 'usd,inr',
        include_24hr_change: true
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Bitcoin price' });
  }
});

// Fetch Trending Coins
router.get('/trending', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trending coins' });
  }
});

module.exports = router;
