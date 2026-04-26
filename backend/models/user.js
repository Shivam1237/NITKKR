// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: function () {
//       // Only require password if not a Google user
//       return !this.googleId;
//     },
//     default: "", // For Google users
//   },
//   googleId: {
//     type: String,
//     required: false,
//     default: "", // Optional
//   },
//   photo: {
//     type: String,
//     default: "", // ✅ Store profile photo for Google users
//   },
// });

// module.exports = mongoose.model("User", userSchema);

// backend/models/user.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: function () {
        // Only require password if not signing up via Google
        return !this.googleId;
      },
      default: "", // For users created via Google OAuth
    },
    googleId: {
      type: String,
      default: "", // Empty string if not a Google user
    },
    photo: {
      type: String,
      default: "", // URL to profile photo
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Exporting the model named "User"—you still import it via require("../models/user")
module.exports = mongoose.model("User", userSchema);
