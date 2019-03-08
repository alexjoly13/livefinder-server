function getLocationFromReq(req) {
  let ipAddress = "clientip";

  if (req.ip !== "::1") {
    const index = req.ip.search(/\d/);
    ipAddress = req.ip.slice(index);
  }

  console.log("IP ADDRESS ---------------------------", ipAddress);
  return ipAddress;
}

module.exports = getLocationFromReq;
