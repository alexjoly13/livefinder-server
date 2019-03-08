const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/generic", (req, res, next) => {
  const lastApiKey = process.env.LASTFM_API_KEY;
  axios
    .get(
      `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=france&limit=10&api_key=${lastApiKey}&format=json`
    )
    .then(results => {
      res.json(results.data.topartists);
    })
    .catch(err => {
      next(err);
    });
});

router.post("/generic", (req, res, next) => {
  const test = req.body.name;
});

module.exports = router;
