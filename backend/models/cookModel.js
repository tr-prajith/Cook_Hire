const mongoose = require("mongoose");

const cookSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    experience: {
      type: String,
      required: true,
    },
    cuisineSpecialization: {
      type: String,
      required: true,
    },
    preferredWorkType: {
      type: String,
      required: true,
    },
    preferredLocation: {
      type: String,
      required: true,
      trim: true,
    },
    profilePhoto: {
      type: String,
      required: true,
    },
    document: {
      type: String,
      required: true,
    },
    startingPrice: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      default: 4.8,
    },

    reviews: {
      type: Number,
      default: 50,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cook", cookSchema);