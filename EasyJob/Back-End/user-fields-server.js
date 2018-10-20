const express = require("express");
const googleAuth = require("./google-auth");
const passport = require("passport");
const router = express.Router();
const appRoutes = express();
const jwt = require("./jwt-auth");
const {
  userModel,
  createUser,
  findUserById
} = require("./Database/user-schema");
const {
  candidateFields,
  createExperience,
  editExperience,
  deleteExperience,
  createEducation
} = require("./Database/user-fields-schema");

// router.post(
//   "/create/experience",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     try {
//       const { user, body: fields } = req;

//       console.log(`user: ${JSON.stringify(req.user)}`);
//       console.log(user);
//       console.log(`${user._id}    ${JSON.stringify(fields)}`);
//       const experience = await createExperience(user, fields);
//       console.log(`new experience ${experience}`);
//       return res.json(fields);
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

// router.post(
//   "/create/education",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {
//     try {
//       const { user, body } = req;
//       const { ...fields } = body;
//       const education = await createEducation(user, fields);
//       console.log(`new education ${JSON.stringify(education)}`);
//       return res.json(education);
//     } catch (error) {
//       console.log(err);
//     }
//   }
// );

const JWT = passport.authenticate("jwt", { session: false });
appRoutes
  .route("/experience")
  .get(function(req, res) {
    res.send("Get a random book");
  })
  .post(JWT, async (req, res) => {
    try {
      const { user, body: fields } = req;
      // console.log(`user: ${JSON.stringify(req.user)}`);
      // console.log(user);
      console.log(`${user._id}    ${JSON.stringify(fields)}`);
      const experience = await createExperience(user, fields);
      // console.log(`new experience ${experience}`);
      return res.json(experience);
    } catch (err) {
      console.log(err);
    }
  })
  .put(JWT, async (req, res) => {
    try {
      const {
        user,
        body: data,
        query: { id }
      } = req;
      const { _id } = user;
      //console.log(id);
      // console.log(`user: ${JSON.stringify(req.user)} ${_id}`);
      // console.log(user);
      // console.log(`${user._id}    ${JSON.stringify(fields)}`);
      const experience = await editExperience(id, data);
      //console.log(`edit experience ${experience}`);
      if (experience) {
        return res.json(experience);
      }
      return res.status(404).json("not found");
    } catch (err) {
      console.log(err);
    }
  })
  .delete(JWT, async (req, res) => {
    try {
      const {
        user,
        body: data,
        query: { id }
      } = req;
      const { _id } = user;
      const experience = await deleteExperience(id);
      return res.json({});
    } catch (err) {
      console.log(err);
    }
  });

appRoutes.get("/candidate", async (req, res) => {
  if (req.user) {
    // console.log(req.user);
    const {
      user: { _id }
    } = req;
    //console.log(_id);
    const fields = await candidateFields(_id);
    return res.json({ fields });
  }
  return res.status(404).send("invalid data");
});

module.exports = appRoutes;
