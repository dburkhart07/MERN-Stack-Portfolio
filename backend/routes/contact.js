const express = require('express');
const Contact = require('../models/Contact');


const router = express.Router();

// Could add more http methods to the router if need be (get, put, delete)
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new Contact({ name, email, subject, message });

    await newContact.save();
    res.status(201).json({ message: 'Message received successfully!' });
    console.log("New Contact:", newContact);
  } catch (error) {
    console.error('Error saving contact form data:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
