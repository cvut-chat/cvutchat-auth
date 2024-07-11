const jwt = require('jsonwebtoken');
const axios = require('axios');

const verifyToken = async (token) => {
  if (!token) {
    throw new Error('No token provided');
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // TODO Auth only communicate with front and rest
  const response = await axios.get(`http://data/api/auth/${decoded.id}`);
  return response.data;
};

module.exports = verifyToken;