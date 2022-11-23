const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const cardSchema = require('./card')

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
        match: [/.+@.+\..+/, 'Must use a valid email address'],
      },
      password: {
        type: String,
        required: true,
      },
      ownedCard: [cardSchema],
    },


    {
      toJSON: {
        virtuals: true,
      },
    }
  );