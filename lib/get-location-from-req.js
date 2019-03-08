function getLocationFromReq(req) {
  let location = "clientip";

  if (req.ip !== "::1") {
    const index = req.ip.search(/\d/);
    const ipAddress = req.ip.slice(index);
    location = `ip:${ipAddress}`;
  }

  console.log("IP ADDRESS ---------------------------", location);
  return location;
}

module.exports = getLocationFromReq;
