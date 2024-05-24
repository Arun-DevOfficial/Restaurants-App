import express from "express";
import cors from "cors";
import { handleSignUp, handleLogin } from "../Controller/userAuth.js";
import { LoggerMiddleware } from "../Middleware/Logger.js";
import { handleServerRuning } from "../Controller/test.js";
import UserModel from "../Model/User.js";
import VerifyUser from "../Middleware/VerifyUser.js";

// Router Config
const router = express.Router();

// Middleware
router.use(LoggerMiddleware);
router.use(express.json());
router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
router.post("/signup", handleSignUp); // POST route for user sign-up
router.post("/login", handleLogin); // POST route for user login
router.get("/test", handleServerRuning);

export { router };
