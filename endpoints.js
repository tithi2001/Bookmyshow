const endpoints = {
  movies: {
    getAllMovies: "/movies",
    getMovieById: "/movies/:id",
    createMovie: "/movies",
    updateMovieById: "/movies/:id",
    deleteMovieById: "/movies/:id",
  },

  users: {
    getAllUsers: "/users",
    getUserById: "/users/:id",
    createUser: "/users",
    updateUserById: "/users/:id",
    deleteUserById: "/users/:id",
  },

  bookings: {
    getAllBookings: "/bookings",
    getBookingById: "/bookings/:id",
    createBooking: "/bookings",
    updateBookingById: "/bookings/:id",
    deleteBookingById: "/bookings/:id",
  },
};

export default endpoints;
