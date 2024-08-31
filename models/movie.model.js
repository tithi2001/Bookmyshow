import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    releaseDate: {
        type: Date,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
});

export const Movie = mongoose.model("Movie", movieSchema);
