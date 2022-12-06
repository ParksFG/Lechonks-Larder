const jwt = require('jsonwebtoken');
const User = require('../models/user')

const expiration = "2h";

module.exports = {
  signToken: function ({ email, name, _id }) {
    const payload = { email, name, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};


