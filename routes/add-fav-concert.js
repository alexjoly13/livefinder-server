const express = require("express");
const router = express.Router();
const axios = require("axios");

const User = require("../models/user-model.js");

router.post("/concert-info/:concertId", (req, res, next) => {
  const { concertId } = req.body;
  User.findByIdAndUpdate(req.user._id, { $push: { concert: concertId } })
    .then(result => {
      res.json(result.concert);
    })
    .catch(err => next(err));
});

module.exports = router;
