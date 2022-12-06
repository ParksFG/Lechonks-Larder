const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const cardSchema = require("./card");

const userSchema = new mongoose.Schema(
  {
    uid: {
      type: String,
      require: true
    }
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    // set cards to be an array of data to the cardSchema
    savedCards: [cardSchema]
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);
/* codes for bcrypt and token
// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
*/

module.exports = mongoose.model('User', userSchema);