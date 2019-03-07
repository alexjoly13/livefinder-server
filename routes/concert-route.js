const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/concert-info/:concertId", (req, res, next) => {
  const { concertId } = req.params;
  const apiKey = process.env.SONGKICK_API_KEY;
  const url = `https://api.songkick.com/api/3.0/events/${concertId}.json?apikey=${apiKey}`;

  const concertDetails = axios.get(url).then(result => {
    res.json(result.data.resultsPage);
  });
});

const User = require("../models/user-model.js");

router.post("/concert-info/:concertId", (req, res, next) => {
  const { concertId } = req.params;
  const apiKey = process.env.SONGKICK_API_KEY;
  const url = `https://api.songkick.com/api/3.0/events/${concertId}.json?apikey=${apiKey}`;

  axios
    .get(url)
    .then(result => {
      User.findByIdAndUpdate(
        req.user._id,
        {
          $addToSet: {
            concert: result.data.resultsPage.results.event
          }
        },
        { new: true, runValidators: true }
      )
        .then(currentUser => {
          res.json(currentUser);
        })
        .catch(err => next(err));
    })
    .catch();
});

module.exports = router;
