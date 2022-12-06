const jwt = require('jsonwebtoken');

const expiration = "2h";

const signToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: expiration
  })
}

module.exports = { signToken }
