// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    // Store hashed passwords, not plain text
    type: String,
    required: true,
  },
  // Add any other user fields as needed
});

module.exports = mongoose.model('User', userSchema);
