const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/concert-info/:concertId", (req, res, next) => {
  const { concertId } = req.params;

  console.log(concertId);
  const apiKey = process.env.SONGKICK_API_KEY;
  const url = `https://api.songkick.com/api/3.0/events/${concertId}.json?apikey=${apiKey}`;

  const concertDetails = axios.get(url).then(result => {
    console.log(result.data.resultsPage);
    res.json(result.data.resultsPage);
  });
});

module.exports = router;
