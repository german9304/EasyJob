const bycript = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const LocalStrategy = require("passport-local").Strategy;
const { JWT_SECRET_KEY } = require("./client-auth");
const { userModel, createUser, findUserById } = require("./Database/db");
const express = require("express");

passport.serializeUser(function(userId, done) {
  done(null, userId);
});

passport.deserializeUser(function(id, done) {
  console.log("desirialize");
  userModel.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function(email, password, done) {
      userModel.findOne({ email }, async  function(err, user) {
        if (!user) {
          const token = jwt.sign({ email, password }, JWT_SECRET_KEY.key);
          const usr = await createUser({ email, password, token });
          return done(null, usr._id,{ message: 0});
         
        }
        const {password: hash} = user;
        console.log('hash: ',hash);
        const checkpsswrd = user.comparePasswords(password, hash);
        if(checkpsswrd){
           return done(null, user, { message: 1});
        }
        return done(null, {message: "incorrect password"})
      });
      //   return done(null, { username }, { message: "Username Already Exists" });
    }
  )
);
