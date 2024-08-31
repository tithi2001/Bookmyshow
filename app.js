import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import moviesRouter from "./routes/movies.js";
import usersRouter from "./routes/users.js";
import bookingsRouter from "./routes/bookings.js";

const app = express();

// Middleware
// app.use(bodyParser.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});

// MongoDB Connection
const mongoUri = process.env.MONGO_URI;
mongoose
  .connect(mongoUri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

app.use("/movies", moviesRouter);
app.use("/users", usersRouter);
app.use("/bookings", bookingsRouter);

export default app;
