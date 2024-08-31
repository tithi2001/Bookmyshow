import express from "express";
import BookingController from "./controllers/booking.controller.js";

const router = express.Router();

// Get all bookings
router.get("/", BookingController.getAllBookings);

// Get a booking by ID
router.get("/:id", BookingController.getBookingById);

// Create a new booking
router.post("/", BookingController.createBooking);

// Update a booking by ID
router.put("/:id", BookingController.updateBooking);

// Delete a booking by ID
router.delete("/:id", BookingController.deleteBooking);

export default router;
