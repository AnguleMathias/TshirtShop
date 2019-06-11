const jwt  = require('jsonwebtoken');
require("dotenv-safe").config({
  allowEmptyValues: true
});

const secretKey = process.env.SECRET_KEY;

const generateToken = payload => (
  jwt.sign({ payload }, secretKey, { algorithm: 'HS256', expiresIn: '2h' })
);

module.exports = generateToken;
