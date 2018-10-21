// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const SALT_ROUNDS = 10;
// const db = require("./db-connection");
/*
USER SCHEMA
// */
// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//     candidate: Boolean,
//     employer: Boolean,
//     email: String,
//     googleId: String,
//     password: String,
//     jwt: String
//   },
//   { collection: "users", versionKey: false }
// );

// userSchema.pre("save", async function() {
//   const user = this;
//   if (user.password) {
//     if (user.isModified("password") || user.isNew) {
//       try {
//         const gen = await bcrypt.genSalt(SALT_ROUNDS);
//         const bcrypthash = await bcrypt.hash(user.password, gen);
//         user.password = bcrypthash;
//       } catch (err) {
//         console.log("res: ", err);
//       }
//     }
//   }
// });

/*
Compare Passwords
*/
// userSchema.methods.comparePasswords = async function(userPassword, hash) {
//   const result = await bcrypt.compare(userPassword, hash);
//   return result;
// };

// const userModel = mongoose.model("user", userSchema);

// const findGoogleUser = async id => {
//   try {
//     const user = await userModel.findOne({ googleId: id });
//     if (user) {
//       const { _id } = user;
//       console.log(_id);
//       return _id;
//     }
//     return user;
//   } catch (error) {
//     console.log(error);
//   }
// };

// const createUserGoogle = ({ id, email, token }) => {
//   return new userModel({
//     email,
//     googleId: id,
//     jwt: token
//   });
// };

// const createUser = ({ email, password, token: jwt }) => {
//   return new userModel({
//     email,
//     password,
//     jwt
//   });
// };

// const findUserById = async ({ _id }) => {
//   const usr = await userModel.findById(_id);
//   return usr;
// };
// const findUserName = async ({ email, password }) => {
//   try {
//     const usr = await userModel.findOne({ email });
//     if (usr) {
//       const { password: hash } = usr;
//       const res = await usr.comparePasswords(password, hash);
//       console.log(usr, res);
//       return {
//         usr,
//         res
//       };
//     }
//     console.log("error not user found");
//   } catch (err) {
//     console.log("res: ", err);
//   }
// };

// findUserName({ email: "test@mail.com", password: "mypassword" });

// module.exports = {
//   createUserGoogle,
//   userModel,
//   findGoogleUser,
//   createUser,
//   findUserById
// };

import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import { Document, Schema, model, Model } from "mongoose";
const SALT_ROUNDS = 10;
const db = require("./db-connection");

export interface IUser extends Document {
  name: String;
  candidate: Boolean;
  employer: Boolean;
  email: String;
  googleId: String;
  password: String;
  jwt: String;
  comparePasswords(userPassword, hash): Promise<boolean>;
}

export interface UserName {
  usr: IUser;
  res: boolean;
}

// interface IUserModel extends IUser, Document {
//   comparePasswords(userPassword, hash): Promise<boolean>;
// }
/*
USER SCHEMA
 */
const userSchema: Schema = new mongoose.Schema(
  {
    name: String,
    candidate: Boolean,
    employer: Boolean,
    email: String,
    googleId: String,
    password: String,
    jwt: String
  },
  { collection: "users", versionKey: false }
);

userSchema.pre<IUser>("save", async function(): Promise<void> {
  const user = this;
  if (user) {
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
userSchema.methods.comparePasswords = async function(
  userPassword,
  hash
): Promise<boolean> {
  const result = await bcrypt.compare(userPassword, hash);
  return result;
};

const userModel: Model<IUser> = mongoose.model<IUser>("user", userSchema);

const findGoogleUser = async id => {
  try {
    const user = await userModel.findOne({ googleId: id });
    if (user) {
      const { _id } = user;
      console.log(_id);
      return _id;
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

const createUserGoogle = ({ id, email, token }): IUser => {
  return new userModel({
    email,
    googleId: id,
    jwt: token
  });
};

const createUser = ({ email, password, token: jwt }): IUser => {
  return new userModel({
    email,
    password,
    jwt
  });
};

const findUserById = async ({ _id }): Promise<IUser> => {
  const usr = await userModel.findById(_id);
  return usr;
};
const findUserName = async ({ email, password }): Promise<UserName> => {
  try {
    const usr = await userModel.findOne({ email });
    if (usr) {
      const { password: hash } = usr;
      const res = await usr.comparePasswords(password, hash);
      console.log(usr, res);
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

export {
  createUserGoogle,
  userModel,
  findGoogleUser,
  createUser,
  findUserById
};
