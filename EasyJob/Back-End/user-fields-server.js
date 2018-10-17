const express = require("express");
const googleAuth = require("./google-auth");
const passport = require("passport");
const router = express.Router();
const jwt = require("./jwt-auth");
const {
  userModel,
  createUser,
  findUserById
} = require("./Database/user-schema");
const {
  createExperience,
  createEducation
} = require("./Database/user-fields-schema");

router.post(
  "/create/experience",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user, body } = req;
      // console.log(`user: ${JSON.stringify(req.user)}`);
      const { ...fields } = body;
      // console.log(user);
      // console.log(`${user._id}    ${JSON.stringify(fields)}`);
      const experience = await createExperience(user, fields);
      // console.log(`new experience ${experience}`);
      return res.json(body);
    } catch (err) {
      console.log(err);
    }
  }
);

router.post(
  "/create/education",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { user, body } = req;
      const { ...fields } = body;
      const education = await createEducation(user, fields);
      console.log(`new education ${JSON.stringify(education)}`);
      return res.json(education);
    } catch (error) {
      console.log(err);
    }
  }
);

router.get("/candidate", (req, res) => {
  if (req.user) {
    const { experience, education } = req.user;
    return res.json({ experience, education });
  }
  return res.status(404).send("invalid data");
});

module.exports = router;
