const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/add', async (req, res) => {
  try {
    // Creating a new user instance with the request body
    const newUser = new User({
      username: req.body.username,
      password: req.body.password, // Ideally, you should hash the password
    });

    // Saving the new user to the database
    const savedUser = await newUser.save();

    // Sending a success response
    res.status(201).json({ message: 'User created', user: savedUser });
  } catch (error) {
    // Sending an error response
    res
      .status(400)
      .json({ message: 'Error creating user', error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    console.log('Login request received:', req.body);
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || user.password !== password) {
      console.log('Invalid login attempt:', username);
      return res.status(401).send('Invalid credentials');
    }

    console.log('Login successful:', username);
    res.status(200).send('Login successful');
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).send('Server error');
  }
});

router.post('/logout', (req, res) => {
  // Invalidate the token or clear the session
  // Implementation depends on how you handle authentication

  res.status(200).send('Logged out successfully');
});

module.exports = router;
