const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/generic", (req, res, next) => {
  const item = req.body;
  console.log(item);
});

module.exports = router;
