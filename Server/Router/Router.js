import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { handleSignUp, handleLogin } from "../Controller/userAuth.js";
import { LoggerMiddleware } from "../Middleware/Logger.js";
import { handleServerRuning } from "../Controller/test.js";
import VerifyUser from "../Middleware/VerifyUser.js";

// Router Config
const router = express.Router();

// Middleware
router.use(LoggerMiddleware);
router.use(express.json());
router.use(cookieParser());
router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Routes
router.post("/signup", handleSignUp);
router.post("/login", handleLogin);
router.get("/test", VerifyUser, handleServerRuning);

export { router };
