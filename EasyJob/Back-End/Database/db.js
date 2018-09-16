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

module.exports = {
  createUserGoogle,
  userModel,
  findGoogleUser
};
