const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/concerts-paris", (req, res, next) => {
  const kickApi = process.env.SONGKICK_API_KEY;
  axios
    .get(
      `https://api.songkick.com/api/3.0/metro_areas/28909/calendar.json?apikey=${kickApi}&per_page=10`
    )
    .then(concertObject => {
      res.json(concertObject.data);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
