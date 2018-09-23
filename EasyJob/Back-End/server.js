const express = require("express");
const googleAuth = require("./google-auth");
const cookieSession = require("cookie-session");
const { SECRET_KEY } = require("./client-auth");
const test = require("./local-auth");
const flash = require("connect-flash");
const { userModel, createUser, findUserById } = require("./Database/db");

const passport = require("passport");
const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: [SECRET_KEY.key],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
// require("./local-auth")(passport);
app.use(flash());

//app.use(express.static("../dist/EasyJob"));

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/test", (req, res) => {
  //console.log(req);
  res.send("middleware");
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

app.get("/google/auth/redirect", passport.authenticate("google"), function(
  req,
  res,
  next
) {
  res.redirect("/");
});

app.get("/user", (req, res) => {
  console.log(req.user);
  if (req.user) {
    const { email, jwt } = req.user;
    const user = {
      email,
      jwt,
      auth: true
    };
    res.json(user);
  } else {
    res.json({ auth: false });
  }
});

app.get("/logout", (req, res) => {
  req.logout();

  res.redirect("/");
});
app.post("/api", (req, res) => {
  const { body: user } = req;
  console.log(user);
  res.json(user);
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.post("/create/user", passport.authenticate("local"), function(req, res) {
  const {  email, jwt } = req.user;
  // console.log(req.authInfo)
  const {message} = req.authInfo;
  
  if(message){
     res.json({message: 'user aleady exist'});
  }else{
     res.json({user: {email, jwt}});
  }
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  const {  email, jwt } = req.user;
  // console.log("successful login: ", user);
  res.json({user: {email, jwt}});
});
app.listen(3000, () => console.log("app listening on port 3000!"));






