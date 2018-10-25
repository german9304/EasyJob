import { connect, connection } from "mongoose";
import { DATABASE_URL } from "../client-auth";

connect(
  DATABASE_URL,
  { useNewUrlParser: true }
);
const db = connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected mongoose");
});

export default db;
