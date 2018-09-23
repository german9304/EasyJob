const mongoose = require("mongoose");
const { DATABASE_URL } = require("../client-auth");
const { userSchema, preSaveMiddleware } = require("./schemaModels");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

mongoose.connect(
  DATABASE_URL,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected");
});

const userModel = mongoose.model("user", userSchema);

const findGoogleUser = async id => {
  const user = await userModel.findOne({ googleId: id });
  if (user) {
    const { _id } = user;
    console.log(_id);
    return _id;
  }
  return user;
};

const createUserGoogle = ({ value, id }) => {
  return new userModel({
    email: value,
    googleId: id
  });
};

const createUser = async ({ email, password }) => {
  const user = new userModel({
    email,
    password
  });
  // console.log("user before: ", user);
  preSaveMiddleware(user);
  const newuser = await user.save();

  // pres.then(() => {
  //   // user.save(function(err, newuser) {
  //   //   console.log(newuser);
  //   // });
  // });
  // user.save(function(err, newuser) {
  //   console.log("save");
  //   console.log(newuser);
  // });
  //console.log("user after: ", user);
};

module.exports = {
  createUserGoogle,
  userModel,
  findGoogleUser,
  createUser
};
