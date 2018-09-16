const express = require("express");
const googleAuth = require("./google-auth");
const cookieSession = require("cookie-session");
const { SECRET_KEY } = require("./client-auth");
const { userModel } = require("./Database/db");

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
  res.redirect("/user");
});

app.get("/user", (req, res) => {
  //console.log("session: ", req.session);
  //console.log(user)
  //const { session: {passport: } } = req;
  res.send(req.session);
});

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/test");
});
app.post("/api", (req, res) => {
  const { body: user } = req;
  console.log(user);
  res.json(user);
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.post("/create/user", (req, res) => {
  const { body } = req;
  const newUser = new userModel({
    email: body.email
  });
  newUser.save(function(err, user) {
    console.log(user);
  });
  console.log(body);
  res.send(body);
});
app.listen(3000, () => console.log("app listening on port 3000!"));
