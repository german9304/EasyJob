const mongoose = require("mongoose");
/*
USER SCHEMA
*/
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    googleId: String,
    password: String
  },
  { collection: "UserCollection", versionKey: false }
);

module.exports = {
  userSchema
};
