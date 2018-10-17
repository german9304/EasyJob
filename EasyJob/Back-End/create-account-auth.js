const bycript = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const LocalStrategy = require("passport-local").Strategy;
const { JWT_SECRET_KEY } = require("./client-auth");
const {
  userModel,
  createUser,
  findUserById
} = require("./Database/user-schema");
const express = require("express");

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
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      userModel.findOne({ email }, async function(err, user) {
        if (!user) {
          try {
            const newUser = createUser({ email, password });
            console.log(`new user: ${newUser.email}`);
            const token = jwt.sign(
              { email: newUser.email, _id: newUser._id },
              JWT_SECRET_KEY.key
            );
            newUser.jwt = token;
            const usr = await newUser.save();
            return done(null, usr._id, { message: 0 });
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
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      userModel.findOne({ email }, async function(err, user) {
        if (!user) {
          return done(null, false);
        }
        const { password: hash } = user;
        // console.log('hash: ',hash);
        const checkpsswrd = await user.comparePasswords(password, hash);
        if (checkpsswrd) {
          return done(null, user, { message: 1 });
        }

        return done(null, false);
      });
      //   return done(null, { username }, { message: "Username Already Exists" });
    }
  )
);
