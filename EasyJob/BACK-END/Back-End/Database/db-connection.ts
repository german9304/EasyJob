import * as mongoose from "mongoose";
import { DATABASE_URL } from "../client-auth";

mongoose.connect(
  DATABASE_URL,
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected");
});

export default db;
