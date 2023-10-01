import mongoose from "mongoose";

const eventBookingSpace = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    venueId: {
      type: mongoose.Types.ObjectId,
      ref: "Venue",
      required: true,
    },
    packageId: {
      type: mongoose.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    message: {
      type: String,
      // required: true,
    },
    eventType: {
      type: String,
      required: true,
    },
    eventFromDate: {
      type: Date,
      required: true,
    },
    eventToDate: {
      type: Date,
      required: true,
    },
    totalAttendees: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      // required: true,
    },
    status: {
      type: String,
      enum: ["active", "cancelled", "completed", "pending"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Event =
  mongoose.models.Event || mongoose.model("Event", eventBookingSpace);

export default Event;
