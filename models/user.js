const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// In this setup, module.exports exports an object containing both the User model and the userSchema schema.
module.exports = mongoose.model("User", userSchema);
