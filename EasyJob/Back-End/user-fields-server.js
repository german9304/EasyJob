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
  const barr = [body];
  const { _id, experience } = req.user;
  // console.log("req before user: ", req.user);
  const exp = [...experience, ...barr];
  // console.log();
  // console.log(exp);
  // console.log("_id", _id);
  userModel.findById(_id, function(err, user) {
    if (err) return handleError(err);
    user.experience = exp;
    user.save(function(err, updatedUser) {
      if (err) return handleError(err);
      res.json(updatedUser.experience);
    });
  });
  // res.send(experience);
});

router.get("/candidate", (req, res) => {
  if (req.user) {
    const { experience, education } = req.user;
    return res.json({ experience, education });
  }
  return res.status(404).send("invalid data");
});
module.exports = router;
