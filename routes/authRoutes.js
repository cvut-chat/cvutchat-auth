const express = require("express");
const router = express.Router();
const generateToken = require('../utils/generateToken');
const verifyTokenMiddleware = require('../middlewares/authMiddleware').protect;

router.post('/generateToken', async (req, res) => {
  try {
    const token = generateToken(req.body.username); //TODO username is unique but use user _id instead ?
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error generating token' });
  }
});

router.get('/verifyToken', verifyTokenMiddleware, (req, res) => {
  res.json({ message: 'Token is valid', user: req.user });
});

module.exports = router;
