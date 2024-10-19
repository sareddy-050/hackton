const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb"); // Corrected the import statement

const app = express();
dotenv.config(); // Corrected the variable name from dotEnv to dotenv

// Use the correct MongoDB connection string from your .env file
const uri = process.env.MONGO_URI; // Ensure your .env has MONGO_URI

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }) // Added options for connection
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error);
    });
-
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server started and running at http://localhost:${PORT}`);
});
