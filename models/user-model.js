const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    fullName: String,
    image: String,
    spotifyId: String,
    email: String,
    loginToken: String,
    spotifyLink: String,
    spotifyAccesToken: String,
    spotifyRefreshToken: String,
    concert: { type: Array }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
