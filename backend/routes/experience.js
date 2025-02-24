const express = require('express');
const Experience = require('../models/Experience');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const experience = await Experience.find();
    res.json(experience);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
