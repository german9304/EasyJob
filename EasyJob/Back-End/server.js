const express = require("express");
const cookieSession = require("cookie-session");
const { SECRET_KEY } = require("./client-auth");
const localAuth = require("./create-account-auth");
const flash = require("connect-flash");
const jwtAuth = require("./jwt-auth");
const { categoryModel } = require("./Database/jobs-Schema");

const auth = require("./auth-server");
const userfields = require("./user-fields-server");

const {
  userModel,
  createUser,
  findUserById
} = require("./Database/user-schema");

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
app.use("/auth", auth);
app.use("/api/field", userfields);

//app.use(express.static("../dist/EasyJob"));

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/test", (req, res) => {
  //console.log(req);
  res.send("middleware");
});

// app.get("/auth/google", (req, res, next) => {
//   console.log(req.query);

//   next();
// });

// app.get(
//   "/auth/google",
//   passport.authenticate("google", {
//     scope: ["profile", "email"]
//   })
// );

// app.get("/google/auth/redirect", passport.authenticate("google"), function(
//   req,
//   res,
//   next
// ) {
//   console.log("req user: ", req.user);
//   res.redirect("/");
// });

app.get("/user", (req, res) => {
  // console.log(req.user);
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
    // res.status(401);
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

// app.post("/create/user", passport.authenticate("createUser"), function(
//   req,
//   res
// ) {
//   // console.log(req.authInfo)
//   const { user: id } = req;
//   const usr = findUserById(id);
//   usr.then(data => {
//     const { _id, email, jwt } = data;
//     res.json({ user: { _id, email, jwt } });
//   });
// });

// app.post("/login", passport.authenticate("loginUser"), (req, res) => {
//   console.log(req);
//   const { email, jwt } = req.user;
//   // console.log("successful login: ", user);
//   res.json({ user: { email, jwt, auth: true } });
// });

app.get(
  "/jwt",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log(req.user);
    res.send("data");
  }
);

app.post("/api/post/job", (req, res) => {});

app.get("/api/job/categories", (req, res) => {
  const {
    query: { search }
  } = req;
  const searchRegex = new RegExp(`^${search}`);
  categoryModel.find({ category: { $regex: searchRegex } }, function(
    err,
    data
  ) {
    if (err) {
      return console.log(err);
    }
    res.json(data);
  });
});

app.get("/api/categories", (req, res) => {
  categoryModel.find({}, function(err, data) {
    if (err) {
      return console.log(err);
    }
    res.json(data);
  });
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(3000, () => console.log("app listening on port 3000!"));
