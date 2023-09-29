import mongoose from "mongoose";

const venueSpaceSchema = new mongoose.Schema(
  {
    venueName: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    maxCapacity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rentalFee: {
      type: Number,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
    },
    tags: {
      type: Array,
    },
    currentBookings: {
      type: Array,
    },
    imageUrls: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Venue =
  mongoose.models.Venue || mongoose.model("Venue", venueSpaceSchema);

export default Venue;
