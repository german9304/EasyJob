import * as bycript from "bcrypt";
import * as passport from "passport";

// const jwt = require("jsonwebtoken");
import * as jwt from "jsonwebtoken";
// const LocalStrategy = require("passport-local").Strategy;
import * as LocalStrategy from "passport-local";

import { JWT_SECRET_KEY } from "./client-auth";

import { userModel, createUser, findUserById } from "./Database/user-schema";

import * as express from "express";

const localStrategy = LocalStrategy.Strategy;
passport.serializeUser(function(userId, done) {
  done(null, userId);
});

passport.deserializeUser(function(id, done) {
  userModel.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  "createUser",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      userModel.findOne({ email }, async function(err, user) {
        if (!user) {
          try {
            const token = "1123";
            const newUser = createUser({ email, password, token });
            // console.log(`new user: ${newUser.email}`);
            const newToken = jwt.sign(
              { email: newUser.email, _id: newUser._id },
              JWT_SECRET_KEY.key
            );
            newUser.jwt = newToken;
            const usr = await newUser.save();
            return done(null, usr._id);
          } catch (err) {
            console.log(err);
          }
          // console.log("usr: ", usr);
        }
        // const {password: hash} = user;
        // // console.log('hash: ',hash);
        // const checkpsswrd = user.comparePasswords(password, hash);
        // if(checkpsswrd){
        //    return done(null, user, { message: 1});
        // }
        return done(null, false, { message: "user already exists" });
      });
      //   return done(null, { username }, { message: "Username Already Exists" });
    }
  )
);

passport.use(
  "loginUser",
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      userModel.findOne({ email }, async function(err, user): Promise<any> {
        if (!user) {
          return done(null, false);
        }
        const { password: hash } = user;
        // console.log('hash: ',hash);
        const checkpsswrd = await user.comparePasswords(password, hash);
        if (checkpsswrd) {
          return done(null, user);
        }

        return done(null, false);
      });
      //   return done(null, { username }, { message: "Username Already Exists" });
    }
  )
);
