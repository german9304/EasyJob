import { connect, connection } from "mongoose";
import * as mongoose from "mongoose";
import { DATABASE_URL } from "../client-auth";

mongoose.connect(
  DATABASE_URL,
  { useNewUrlParser: true }
);

let bucketName;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected mongoose");
});

export default db;
