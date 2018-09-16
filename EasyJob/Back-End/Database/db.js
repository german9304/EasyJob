const mongoose = require("mongoose");
const { DATABASE_URL } = require("../client-auth");
const { userSchema } = require("./schemaModels");

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

const findUser = async id => {
  const user = await userModel.findOne({ googleId: id });
  return user;
};

const createUserGoogle = ({ value, id }) => {
  const userNew = new userModel({
    email: value,
    googleId: id
  });
  console.log("function ");
  let newUser;
  userNew.save();
  console.log("new user: ", newUser);
};

module.exports = {
  createUserGoogle,
  userModel,
  findUser
};
