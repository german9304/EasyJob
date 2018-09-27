const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const db = require("./db-connection");
/*
USER SCHEMA
*/
const userSchema = new mongoose.Schema(
  {
    name: String,
    candidate: Boolean,
    employer: Boolean,
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
    ],
    education: [],
    jobs: []
  },
  { collection: "UserCollection", versionKey: false }
);

userSchema.pre("save", async function() {
  const user = this;
  if (user.password) {
    if (user.isModified("password") || user.isNew) {
      try {
        const gen = await bcrypt.genSalt(SALT_ROUNDS);
        const bcrypthash = await bcrypt.hash(user.password, gen);
        user.password = bcrypthash;
      } catch (err) {
        console.log("res: ", err);
      }
    }
  }
});

/*
Compare Passwords
*/
userSchema.methods.comparePasswords = async function(userPassword, hash) {
  const result = await bcrypt.compare(userPassword, hash);
  return result;
};

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

const createUserGoogle = ({ id, email, token }) => {
  return new userModel({
    email,
    googleId: id,
    jwt: token
  });
};

const createUser = ({ email, password, token: jwt }) => {
  return new userModel({
    email,
    password,
    jwt
  });
};

const findUserById = async ({ _id }) => {
  const usr = await userModel.findById(_id);
  return usr;
};
const findUserName = async ({ email, password }) => {
  try {
    const usr = await userModel.findOne({ email });
    if (usr) {
      const { password: hash } = usr;
      const res = await usr.comparePasswords(password, hash);
      // console.log(usr, res);
      return {
        usr,
        res
      };
    }
    console.log("error not user found");
  } catch (err) {
    console.log("res: ", err);
  }
};

// findUserName({ email: "test@mail.com", password: "mypassword" });

module.exports = {
  createUserGoogle,
  userModel,
  findGoogleUser,
  createUser,
  findUserById
};
