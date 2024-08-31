import BookingRepository from "../repositories/booking.repository.js";

class BookingService {
  constructor() {
    this.bookingRepository = new BookingRepository();
  }

  // Create a new booking
  async createBooking(bookingData) {
    return await this.bookingRepository.createBooking(bookingData);
  }

  // Get all bookings
  async getAllBookings() {
    return await this.bookingRepository.getAllBookings();
  }

  // Get booking by ID
  async getBookingById(bookingId) {
    return await this.bookingRepository.getBookingById(bookingId);
  }

  // Delete a booking by ID
  async deleteBooking(bookingId) {
    return await this.bookingRepository.deleteBooking(bookingId);
  }
}

export default BookingService;
