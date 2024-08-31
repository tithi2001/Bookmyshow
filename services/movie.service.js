import MovieRepository from "../repositories/movie.repository.js";

class MovieService {
  constructor() {
    this.movieRepository = new MovieRepository();
  }

  // Get all movies
  async getAllMovies() {
    return await this.movieRepository.getAllMovies();
  }

  // Get a movie by ID
  async getMovieById(movieId) {
    return await this.movieRepository.getMovieById(movieId);
  }

  // Create a new movie
  async createMovie(movieData) {
    return await this.movieRepository.createMovie(movieData);
  }

  // Update a movie by ID
  async updateMovie(movieId, movieData) {
    return await this.movieRepository.updateMovie(movieId, movieData);
  }

  // Delete a movie by ID
  async deleteMovie(movieId) {
    return await this.movieRepository.deleteMovie(movieId);
  }
}

export default MovieService;
