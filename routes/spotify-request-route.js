const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/userInfo", (req, res, next) => {
  // console.log("it works");

  const url =
    "https://api.spotify.com/v1/me/top/artists?limit=20&time_range=short_term";
  const accessToken = "Bearer " + req.user.spotifyAccesToken;
  const apiKey = process.env.SONGKICK_API_KEY;

  axios
    .get(url, { headers: { Authorization: accessToken } })

    .then(response => {
      // console.log(response.data);
      const artistName = [];
      response.data.items.forEach(oneArtist => {
        artistName.push(oneArtist.name);
      });

      const tempArray = [];
      const location = req.ip === "::1" ? "clientip" : req.ip;

      const eventIndex = artistName.map(oneQuery => {
        const name = encodeURIComponent(oneQuery);
        const url = `https://api.songkick.com/api/3.0/events.json?apikey=${apiKey}&artist_name=${name}&location=${location}`;
        // console.log(url);
        return axios.get(url);
      });

      Promise.all(eventIndex)
        .then(resultArray => {
          resultArray.forEach(oneResponse => {
            if (oneResponse.data.resultsPage.totalEntries !== 0) {
              tempArray.push(oneResponse.data);
            }
          });
          res.json(tempArray);
          // console.log(tempArray);
        })
        .catch(err => next(err));
    })
    .catch(err => {
      next(err);
    });
});

module.exports = router;

// function userTopTracks() {
//   // const url =
//   //   "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=short_term";
//   // const accessToken =
//   //   "Bearer " +
//   //   "BQAb-_7bf6rMfNUQ6Ge5e-INQdOHYJ1eMhW7DuiAE-98bKVu8h_bYTASBFjbqeNN-XQP9U6bEdsIVCFiYp24wqXCYNcQ_iCjaQK3HJS1JqmK6Zb9y3V0lKSu6LA8F7yrWW_L7CgvU9laKIzfDHftGWI0PQ";
//   axios
//     .get(url, { headers: { Authorization: accessToken } })
//     .then(response => {
//       console.log(response.data.items);
//       const artistName = this.state.topArtistName;
//       response.data.items.forEach(oneArtist => {
//         console.log(oneArtist.name);
//         artistName.push(oneArtist.name);
//       });
//       // artistName.push(response.data.items.name);
//       this.setState({
//         topArtists: response.data.items,
//         topArtistName: artistName
//       });
//       console.log(artistName);
//       const eventIndex = artistName.map(oneQuery => {
//         return axios.get(
//           `https://api.songkick.com/api/3.0/events.json?apikey=XFK6hX8iZ4LjPg6l&artist_name=${oneQuery}&location=clientip`
//           // if (eventIndex.resultsPage.totalEntries === 0) {
//           // return axios.get(
//           // https://api.songkick.com/api/3.0/artists/{artist_id}/similar_artists.json?apikey={your_api_key}
//           // )}
//         );
//       });
//       console.log(eventIndex);
//       const tempArray = [];
//       Promise.all(eventIndex).then(resultArray => {
//         console.log("Big Array", resultArray);
//         resultArray.forEach(oneResponse => {
//           if (oneResponse.data.resultsPage.totalEntries > 0) {
//             tempArray.push(oneResponse);
//           }
//         });
//         console.log(tempArray);
//         // console.log(
//         //   "First JSON",
//         //   resultArray[0].data.resultsPage.results.event[0].displayName
//         // );
//         this.setState({ concertArray: tempArray });
//       });
//     })
//     .catch(err => alert("woops"));
// }
