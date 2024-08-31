import BookingService from "../services/booking.service.js";

class BookingsController {
  constructor() {
    this.bookingService = new BookingService();
  }

  // Create a new booking
  async createBooking(req, res) {
    try {
      const bookingData = req.body;
      const booking = await this.bookingService.createBooking(bookingData);
      res.status(201).json(booking);
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }

  // Get all bookings
  async getAllBookings(req, res) {
    try {
      const bookings = await this.bookingService.getAllBookings();
      res.status(200).json(bookings);
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }

  // Get booking by ID
  async getBookingById(req, res) {
    try {
      const bookingId = req.params.id;
      const booking = await this.bookingService.getBookingById(bookingId);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      res.status(200).json(booking);
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }

  // Delete a booking by ID
  async deleteBooking(req, res) {
    try {
      const bookingId = req.params.id;
      const booking = await this.bookingService.deleteBooking(bookingId);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      res.status(200).json({ message: "Booking deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }
}

export default new BookingsController();
