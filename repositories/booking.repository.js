import { Booking } from "../models/booking.model.js";

class BookingRepository {
  // Create a new booking
  async createBooking(bookingData) {
    const booking = new Booking(bookingData);
    return await booking.save();
  }

  // Get all bookings
  async getAllBookings() {
    return await Booking.find().populate("movie").populate("user");
  }

  // Get a booking by ID
  async getBookingById(bookingId) {
    return await Booking.findById(bookingId).populate("movie").populate("user");
  }

  // Delete a booking by ID
  async deleteBooking(bookingId) {
    return await Booking.findByIdAndDelete(bookingId);
  }
}

export default BookingRepository;
