const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/concert-info/:concertId", (req, res, next) => {
  const { concertId } = req.params;
  const apiKey = process.env.SONGKICK_API_KEY;
  const lastApiKey = process.env.LASTFM_API_KEY;
  const url = `https://api.songkick.com/api/3.0/events/${concertId}.json?apikey=${apiKey}`;
  let artistName = "";
  const allData = [];

  const concertDetails = axios
    .get(url)
    .then(result => {
      artistName =
        result.data.resultsPage.results.event.performance[0].displayName;
      allData.push(result.data.resultsPage.results.event);
      // console.log(allData);

      const encodedName = encodeURI(artistName);

      axios
        .get(
          `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${encodedName}&api_key=${lastApiKey}&format=json`
        )
        .then(results => {
          // console.log(results.data.artist);
          allData.push(results.data.artist);
          // console.log(allData);
          res.json(allData);
        });

      // console.log(artistName);

      // res.json(result.data.resultsPage);
    })
    .catch(err => next(err));
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
