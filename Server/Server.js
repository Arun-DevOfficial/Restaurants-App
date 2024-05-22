import Express from "express";
import { router } from "./Router/Router.js";
import { LoggerMiddleware } from "./Middleware/Logger.js"; // Import LoggerMiddleware using curly braces

// Express setup
const app = Express();

// Router Setup
app.use(router);

// PORT NO
const PORT = process.env.PORT || 5050;

// Server listening
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
