const apiUrl = "http://localhost:4000"; // Backend API URL

// Fetch movies and populate the movie list
async function fetchMovies() {
  try {
    const response = await fetch(`${apiUrl}/movies`);
    const movies = await response.json();

    const movieList = document.getElementById("movie-list");
    const movieSelect = document.getElementById("movie-select");

    movies.forEach((movie) => {
      const li = document.createElement("li");
      li.textContent = `${movie.title} - ${movie.genre} - ${movie.language}`;
      movieList.appendChild(li);

      const option = document.createElement("option");
      option.value = movie._id;
      option.textContent = movie.title;
      movieSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
}

// Handle booking submission
document
  .getElementById("book-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const userEmail = document.getElementById("user-email").value;
    const movieId = document.getElementById("movie-select").value;
    const seats = document.getElementById("seats").value;

    try {
      const response = await fetch(`${apiUrl}/users`, {
        method: "GET",
      });
      const users = await response.json();
      const user = users.find((u) => u.email === userEmail);

      if (!user) {
        alert("User not found. Please register or check the email.");
        return;
      }

      const booking = {
        movieId: movieId,
        userId: user._id,
        seats: seats,
      };

      const bookingResponse = await fetch(`${apiUrl}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      });

      if (bookingResponse.ok) {
        alert("Booking successful!");
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error booking ticket:", error);
    }
  });

// Handle login submission
document.getElementById("login").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Login successful!");
      // Do something on login, like storing user info or redirecting
    } else {
      alert(result.message || "Login failed.");
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
});

// Initialize the app
fetchMovies();
