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
  const exp = [...experience, ...barr];
  // console.log(exp);
  console.log("_id", _id);
  userModel.findOneAndUpdate(_id, { $set: { experience: exp } }, function(
    err,
    user
  ) {
    if (err) return handleError(err);
   
    res.json(exp);
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
