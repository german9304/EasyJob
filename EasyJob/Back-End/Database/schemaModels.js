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
    jwt: String,
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

userSchema.pre("save", async function() {
  const user = this;
  if(user.password){
    if (user.isModified("password") || user.isNew) {
      const gen = await bcrypt.genSalt(SALT_ROUNDS);
      const bcrypthash = await bcrypt.hash(user.password, gen);
      user.password = bcrypthash;
    }
  }
});

userSchema.methods.comparePasswords = async function(userPassword, hash) {
  const result = await bcrypt.compare(userPassword, hash);
  return result;
};

module.exports = {
  userSchema
};
