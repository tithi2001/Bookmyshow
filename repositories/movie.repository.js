import { Movie } from "../models/movie.model.js";

class MovieRepository {
  // Get all movies
  async getAllMovies() {
    return await Movie.find();
  }

  // Get a movie by ID
  async getMovieById(movieId) {
    return await Movie.findById(movieId);
  }

  // Create a new movie
  async createMovie(movieData) {
    const movie = new Movie(movieData);
    return await movie.save();
  }

  // Update a movie by ID
  async updateMovie(movieId, movieData) {
    return await Movie.findByIdAndUpdate(movieId, movieData, { new: true });
  }

  // Delete a movie by ID
  async deleteMovie(movieId) {
    return await Movie.findByIdAndDelete(movieId);
  }
}

export default MovieRepository;
