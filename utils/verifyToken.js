const jwt = require('jsonwebtoken');
const axios = require('axios');

const verifyToken = async (token) => {
  if (!token) {
    throw new Error('No token provided');
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // check that decoded id exists in the database
  const response = await axios.get(`http://rest:3000/api/auth/checkId/${decoded.id}`);
  // if the user does not exist, throw an error
  if (response.status !== 200) {
    throw new Error('User does not exist');
  }
  return decoded;
}

module.exports = verifyToken;