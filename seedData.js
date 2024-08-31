import mongoose from "mongoose";
import { User } from "./models/user.model.js";
import { Movie } from "./models/movie.model.js";
import { Booking } from "./models/booking.model.js";

const seedData = async () => {
  const uri =
    "mongodb+srv://tithid943:6Xt6gPkp5AXPXFr7@cluster0.jsmiz.mongodb.net/bookmyshow";

  try {
    // Connect to your MongoDB Atlas Cluster
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // 1. Seed Users
    const users = [
      {
        name: "Tithi Das",
        email: "tithi9@example.com",
        password: "password123", 
      },
      {
        name: "Jaideep Sharma",
        email: "jaideep007@example.com",
        password: "password123",
      },
     
    ];

    const insertedUsers = await User.insertMany(users);
    console.log("Users inserted");

    // 2. Seed Movies
    const movies = [
      {
        title: "Inception",
        description:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        genre: "Sci-Fi",
        releaseDate: new Date("2010-07-16"),
        duration: 148,
        language: "English",
      },
      {
        title: "The Matrix",
        description:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        genre: "Action",
        releaseDate: new Date("1999-03-31"),
        duration: 136,
        language: "English",
      },
    ];

    const insertedMovies = await Movie.insertMany(movies);
    console.log("Movies inserted");

    // 3. Seed Bookings (using the inserted users and movies)
    const bookings = [
      {
        movie: insertedMovies[0]._id, // First movie ID
        user: insertedUsers[0]._id, // First user ID
        seats: ['A1', 'B1'],
        date: new Date(),
      },
      {
        movie: insertedMovies[1]._id, // Second movie ID
        user: insertedUsers[1]._id, // Second user ID
        seats: ['G7', 'G8'],
        date: new Date(),
      },
      // Add more bookings as needed
    ];

    await Booking.insertMany(bookings);
    console.log("Bookings inserted");

    // Close the connection after seeding data
    mongoose.connection.close();
    console.log("Connection closed");
  } catch (error) {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  }
};

seedData();
