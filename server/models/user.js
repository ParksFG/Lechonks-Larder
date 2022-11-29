const { Schema, model } = require('mongoose');

const cardSchema = require('./card');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set cards to be an array of data to the cardSchema
    savedCards: [cardSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
