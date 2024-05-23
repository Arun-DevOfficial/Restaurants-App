import express from "express";
import { router } from "./Router/Router.js";
import { LoggerMiddleware } from "./Middleware/Logger.js"; // Import LoggerMiddleware using curly braces

// Express setup
const app = express();

// Router Setup
app.use(router);
app.use(express.json());
// PORT NO
const PORT = process.env.PORT || 5050;

// Server listening
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
