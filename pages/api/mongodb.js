const mongoose = require("mongoose");

// Define the MongoDB connection URI
const mongoURI = "mongodb://localhost:27017//Question";

// Create a function to establish the MongoDB connection
async function connectToDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

// Call the function to connect to MongoDB
connectToDatabase();
