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
  .connect(
    "mongodb+srv://arunkum:dev_2050@cluster0.jaxeuud.mongodb.net/Restaurant_App?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((error) => {
    console.log("NOT CONNECTED!");
  });

// Server listening
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
