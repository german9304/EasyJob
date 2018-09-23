const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
/*
USER SCHEMA
*/
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    googleId: String,
    password: String,
    experience: [
      {
        position: String,
        company: String,
        location: String,
        date: { start: String, end: String },
        description: String
      }
    ]
  },
  { collection: "UserCollection", versionKey: false }
);

const preSaveMiddleware = user => {
  userSchema.pre("save", async function() {
    console.log("inside save");
    const gen = await bcrypt.genSalt(SALT_ROUNDS);
    const bcrypthash = await bcrypt.hash(user.password, gen);
    user.password = bcrypthash;
  });
};
userSchema.methods.comparePasswords = function(userPassword, cb) {
  bcrypt.compare(myPlaintextPassword, hash, function(err, res) {});
  cb(null, this.password);
};

module.exports = {
  userSchema,
  preSaveMiddleware
};
