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

//DB Connection
mongoose
  .connect(process.env.MONGODB_URL)
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
        : `http://localhost:${PORT}`
    }`
  );
});
