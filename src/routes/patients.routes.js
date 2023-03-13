const express = require('express');
const router = express.Router();

// User Model
const User = require('../models/patient');

router.get('/', async (req, res) => {
  res.json({
    error: false,
    message: "hello"
  });
});

module.exports = router;