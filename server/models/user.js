const mongoose = require("mongoose");
const bcrypt = require("bcrypt");



const userSchema = new mongoose.Schema(
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
      match: [/.+@.+\..+/, "valid email address"],
    },
    password: {
      type: String,
      required: true,
    },

    uid: {
        type: String,
        require: true
    }
  },
  
);

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


module.exports = mongoose.model('UserMongoose', userSchema);