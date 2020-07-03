const mongoose = require("mongoose");
const Schema = mongoose.Schema;// Create Schema
const UserProfileSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  college: {
    type: String
  },
  phone: {
    type: String
  },
  course: {
    type: String
  },
  isCompleted: {
    type: Boolean
  }
});

module.exports = UserProfile = mongoose.model("userprofiles", UserProfileSchema);