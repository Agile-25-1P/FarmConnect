const express = require('express');
const router = express.Router();
const db = require('../db');


// Add a new user
router.post('/submit', (req, res) => {
  const { name, email } = req.body;
  db.run(
    'INSERT INTO users (name, email) VALUES (?, ?)',
    [name, email],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ id: this.lastID, name, email });
      }
    }
  );
});

module.exports = router;