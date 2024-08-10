// Create a schema
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    unique: true
  }
} ,{ Timestamp: true });
//  Exports schema
const User = mongoose.model("User", userSchema);
module.exports = User;
