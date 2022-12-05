const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const cardSchema = require("./card");

const userSchema = new Schema(
  {
    uid: {
      type: String
    },
    username: {
      type: String
    },
    email: {
      type: String,
      match: [/.+@.+\..+/, "valid email address"]
    },
    password: {
      type: String,
      required: true,
    },
    // set cards to be an array of data to the cardSchema
    savedCards: [cardSchema]
  }
);
module.exports = mongoose.model('user', userSchema);



// set up pre-save middleware to create password
/*
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

const User = model("User", userSchema);

module.exports = User;

*/