const axios = require('axios');
const express = require("express");
const router = express.Router();

const registerUser = async (req, res) => {
  try {
    const response = await axios.post('http://data/api/auth/register', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with cvutchat-data service' });
  }
};

const loginUser = async (req, res) => {
  try {
    const response = await axios.post('http://data/api/auth/login', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error communicating with cvutchat-data service' });
  }
}


router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
