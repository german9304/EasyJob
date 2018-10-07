const express = require("express");
const googleAuth = require("./google-auth");
const passport = require("passport");
const router = express.Router();
const {
  userModel,
  createUser,
  findUserById
} = require("./Database/user-schema");

router.post("/create/experience", (req, res) => {
  const { body } = req;
  const experienceList = [body];
  const { _id, experience } = req.user;
  // console.log("req before user: ", req.user);
  const exp = [...experience, ...experienceList];
  // console.log();
  // console.log(exp);
  // console.log("_id", _id);
  userModel.findById(_id, function(err, user) {
    if (err) return handleError(err);
    user.experience = exp;
    user.save(function(err, updatedUser) {
      if (err) return handleError(err);
      const { experience } = updatedUser;
      res.json(body);
    });
  });
  // res.send(experience);
});

router.post("/create/education", (req, res) => {
  const { body } = req;
  const { _id, education } = req.user;
  const ed = [body];
  const educationList = [...education, ...ed];
  userModel.findById(_id, function(err, user) {
    if (err) return handleError(err);
    user.education = educationList;
    user.save(function(err, updatedUser) {
      const { education } = updatedUser;
      if (err) return handleError(err);
      res.json(body);
    });
  });
});

router.get("/candidate", (req, res) => {
  if (req.user) {
    const { experience, education } = req.user;
    return res.json({ experience, education });
  }
  return res.status(404).send("invalid data");
});

module.exports = router;
