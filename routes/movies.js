import express from "express";
import MoviesController from "../controllers/movie.controller.js";

const router = express.Router();

// Get all movies
router.get("/", MoviesController.getAllMovies);

// Get a movie by ID
router.get("/:id", MoviesController.getMovieById);

// Create a new movie
router.post("/", MoviesController.createMovie);

// Update a movie by ID
router.put("/:id", MoviesController.updateMovie);

// Delete a movie by ID
router.delete("/:id", MoviesController.deleteMovie);

export default router;
