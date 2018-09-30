const express = require("express");
const googleAuth = require("./google-auth");
const passport = require("passport");
const router = express.Router();
const {
  userModel,
  createUser,
  findUserById
} = require("./Database/user-schema");

router.put("/create/experience", (req, res) => {
  const { body } = req;
  const { _id } = req.user;
  console.log(body);
  console.log("_id", _id);
  userModel.findOneAndUpdate(
    _id,
    { $set: { experience: body } },
    { new: true },
    function(err, user) {
      if (err) return handleError(err);
      const { experience } = user;
      res.send(experience);
    }
  );
  //   res.send(body);
});

module.exports = router;
