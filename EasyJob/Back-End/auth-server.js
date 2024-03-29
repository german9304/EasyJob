/*
 Authentication Routes
*/

const express = require("express");
const googleAuth = require("./google-auth");
const passport = require("passport");
const router = express.Router();

const {
  userModel,
  createUser,
  findUserById
} = require("./Database/user-schema");

router.get("/google", (req, res, next) => {
  // console.log(req.query);

  next();
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/redirect", passport.authenticate("google"), function(
  req,
  res,
  next
) {
  //   console.log("req user: ", req.user);
  res.redirect("http://localhost:4200/");
});

router.post("/create/user", passport.authenticate("createUser"), function(
  req,
  res
) {
  // console.log(req.authInfo)
  const { user: id } = req;
  const usr = findUserById(id);
  usr.then(data => {
    const { _id, email, jwt } = data;
    res.json({ user: { _id, email, jwt } });
  });
});

router.post("/login", passport.authenticate("loginUser"), (req, res) => {
  // console.log(req.body);
  try {
    const { email, jwt } = req.user;
    // console.log("login: ", req.user);
    res.json({ user: { email, jwt, auth: true } });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
