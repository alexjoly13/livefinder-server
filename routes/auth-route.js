const express = require("express");
const router = express.Router();
const passport = require("passport");

const User = require("../models/user-model.js");

// router.get("/", function(req, res) {
//   res.json("you did it");
// });

router.get(
  "/auth/spotify",
  passport.authenticate("spotify", {
    scope: ["user-read-email", "user-read-private", "user-top-read"]
  }),
  function(req, res) {}
);

router.get(
  "/auth/spotify/callback",
  passport.authenticate("spotify", {
    failureRedirect: "http://localhost:3000",
    successReturnToOrRedirect: "http://localhost:3000/connected"
  })
);

router.post("/auth/token-login", (req, res, next) => {
  const { loginToken } = req.body;
  User.findOneAndUpdate(
    { loginToken: { $eq: loginToken } },
    { $unset: { loginToken: "" } },
    { new: true }
  )
    .then(userDoc => {
      if (!userDoc) {
        next(new Error(`No user with loginToken ${loginToken}`));
        return;
      }

      req.logIn(userDoc, () => {
        res.json(userDoc);
      });
    })
    .catch(err => next(err));
});

module.exports = router;
