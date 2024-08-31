import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  seats: {
    type: Array,
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
});

export const Booking = mongoose.model("Booking", bookingSchema);
