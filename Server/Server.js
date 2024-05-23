import express from "express";
import { router } from "./Router/Router.js";
import mongoose from "mongoose";

// Express setup
const app = express();

// Router Setup
app.use(router);

// PORT NO
const PORT = process.env.PORT || 5050;

//DB Connection
mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Connected...");
  })
  .catch((error) => {
    console.log("NOT CONNECTED!");
  });

// Server listening
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
