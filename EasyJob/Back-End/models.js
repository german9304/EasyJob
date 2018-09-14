const mongoose = require("mongoose");
const { DATABASE_URL } = require("./client-auth");

mongoose.connect(
  DATABASE_URL,
  { useNewUrlParser: true }
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected");
});
