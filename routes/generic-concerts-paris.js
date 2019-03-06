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
      // console.log(concertObject);
      tempArray.push(concertObject);
      // console.log(tempArray[0].data.resultsPage.results);
      tempArray.forEach(oneConcert => {
        // console.log(oneConcert.data.resultsPage.results.event);
        eventArray.push(oneConcert.data.resultsPage.results.event);
        // console.log(eventArray);
      });
      eventArray.forEach(oneEvent => {
        oneEvent.forEach(oneID => {
          // console.log(oneID.type);
          if (oneID.type !== "Festival") {
            noFestivalArray.push(oneID);
          }
        });
        console.log(noFestivalArray);
        // if (oneConcert.data.resultsPage.results.event.type != "festival") {
        //   noFestivalArray.push(oneConcert);
        // }
      });
      // res.json(concertObject.data);
      // console.log(noFestivalArray);
      res.json(noFestivalArray);
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;
