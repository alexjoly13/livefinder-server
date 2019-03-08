const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/concerts-paris", (req, res, next) => {
  const kickApi = process.env.SONGKICK_API_KEY;
  const tempArray = [];
  const eventArray = [];
  const noFestivalArray = [];
  axios
    .get(
      `https://api.songkick.com/api/3.0/metro_areas/28909/calendar.json?apikey=${kickApi}&per_page=10`
    )
    .then(concertObject => {
      tempArray.push(concertObject);
      tempArray.forEach(oneConcert => {
        eventArray.push(oneConcert.data.resultsPage.results.event);
      });
      eventArray.forEach(oneEvent => {
        oneEvent.forEach(oneID => {
          if (oneID.type !== "Festival") {
            noFestivalArray.push(oneID);
          }
        });
      });
      res.json(noFestivalArray);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
