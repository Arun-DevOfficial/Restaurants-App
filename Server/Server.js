import express from "express";
import { router } from "./Router/Router.js";

// Express setup
const app = express();

// Router Setup
app.use(router);

// PORT NO
const PORT = process.env.PORT || 5050;

// Server listening
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
