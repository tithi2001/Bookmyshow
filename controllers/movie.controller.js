import MovieService from "../services/movie.service.js";

class MoviesController {
  constructor() {
    this.movieService = new MovieService();
  }

  // Get all movies
  async getAllMovies(req, res) {
    try {
      const movies = await this.movieService.getAllMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }

  // Get a movie by ID
  async getMovieById(req, res) {
    try {
      const movieId = req.params.id;
      const movie = await this.movieService.getMovieById(movieId);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json(movie);
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }

  // Create a new movie
  async createMovie(req, res) {
    try {
      const movieData = req.body;
      const movie = await this.movieService.createMovie(movieData);
      res.status(201).json(movie);
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }

  // Update a movie by ID
  async updateMovie(req, res) {
    try {
      const movieId = req.params.id;
      const movieData = req.body;
      const movie = await this.movieService.updateMovie(movieId, movieData);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json(movie);
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }

  // Delete a movie by ID
  async deleteMovie(req, res) {
    try {
      const movieId = req.params.id;
      const movie = await this.movieService.deleteMovie(movieId);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: "Request Failed", error });
    }
  }
}

export default new MoviesController();
