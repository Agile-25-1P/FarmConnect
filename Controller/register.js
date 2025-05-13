const db = require('../db');

// register.js
function registerUser(req, res) {
const { fullName, userType, email, phone, password} = req.body;
  db.run(
    'INSERT INTO user (UserName, UserType, EmailAddress, PhoneNo, Password) VALUES (?, ?, ?, ?, ?)',
    [fullName, userType, email, phone, password],
    function (err) {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.json({ id: this.lastID, fullName, userType, email, phone, password});
      }
    }
  );
}

module.exports = registerUser;

