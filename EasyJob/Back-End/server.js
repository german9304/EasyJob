const express = require("express");
const cookieSession = require("cookie-session");
const { SECRET_KEY } = require("./client-auth");
const localAuth = require("./create-account-auth");
const flash = require("connect-flash");
const jwtAuth = require("./jwt-auth");
const { categoryModel, jobSearch } = require("./Database/jobs-Schema");
const passport = require("passport");
const app = express();
const auth = require("./auth-server");
const appRoutes = require("./user-fields-server");

const {
  userModel,
  createUser,
  findUserById
} = require("./Database/user-schema");

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
app.use("/api/fields", appRoutes);

//app.use(express.static("../dist/EasyJob"));

app.get("/", (req, res) => {
  res.send("home");
});
app.get("/test", (req, res) => {
  //console.log(req);
  res.send("middleware");
});

app.get("/user", (req, res) => {
  // console.log(req.user);
  // const { user } = req;

  if (req.user) {
    try {
      const { email, jwt } = req.user;
      const user = {
        email,
        jwt,
        auth: true
      };
      res.json(user);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.json(null);
  }
});

app.get("/logout", (req, res) => {
  req.logout();

  res.redirect("/");
});
app.post("/api", (req, res) => {
  const { body: user } = req;
  // console.log(user);
  res.json(user);
});

app.get("/api/candidate/jobs", (req, res) => {
  const { query } = req;
  const listjobs = jobSearch(query);
  listjobs.then(data => {
    // console.log(data);
    res.json(data);
  });
  // console.log("query: ", jobSearch);
});

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
