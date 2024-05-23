import express from "express";
import { handleSignUp, handleLogin } from "../Controller/userAuth.js";
import { LoggerMiddleware } from "../Middleware/Logger.js";

// Router Config
const router = express.Router();

// Middleware
router.use(LoggerMiddleware);
router.use(express.json());

// Routes
router.post("/signup", handleSignUp); // POST route for user sign-up
router.post("/login", handleLogin);   // POST route for user login

export { router };
