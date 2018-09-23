const mongoose = require("mongoose");
const { DATABASE_URL } = require("../client-auth");
const { userSchema } = require("./schemaModels");
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
    // console.log(_id);
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

const createUser = async ({ email, password, token: jwt }) => {
  const user = new userModel({
    email,
    password,
    jwt
  });
  const newuser = await user.save();
  return newuser;
};

const findUserById = async ({ _id, password }) => {
  const usr = await userModel.findById(_id);
  const { password: hash } = usr;
  const res = await usr.comparePasswords(password, hash);
  return {
    usr,
    res
  };
};
const findUserName = async ({ email, password }) => {
  const usr = await userModel.findOne({ email });
  const { password: hash } = usr;
  const res = await usr.comparePasswords(password, hash);
  // console.log(usr, res);
  return {
    usr,
    res
  };
};

// findUserName({ email: "test@mail.com", password: "mypassword" });

module.exports = {
  createUserGoogle,
  userModel,
  findGoogleUser,
  createUser,
  findUserById
};
