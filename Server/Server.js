import express from "express";
import { router } from "./Router/Router.js";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";


// Express setup
const app = express();

//.env file config
configDotenv();

// Router Setup
app.use(router);

// PORT NO
const PORT = process.env.PORT || 5050;
const HOST = process.env.HOST || "localhost";

//DB Connection
mongoose
  .connect("mongodb+srv://nanthinisampath3009:Nanthini@cluster0.xs26c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((error) => {
    console.log("NOT CONNECTED!");
  });

// Server listening
app.listen(PORT, () => {
  console.log(
    `Server running on ${
      process.env.DEVELOPMENT_PHASE === "Production"
        ? "https://restaurants-app-green.vercel.app"
        : `http://${HOST}:${PORT}`
    }`
  );
});
