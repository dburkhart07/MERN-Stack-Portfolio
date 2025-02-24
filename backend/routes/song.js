const express = require('express');
const Songs = require('../models/Song');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const songs = await Songs.find();
    res.json(songs);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
