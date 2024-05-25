import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { handleSignUp, handleLogin } from "../Controller/userAuth.js";
import { LoggerMiddleware } from "../Middleware/Logger.js";
import { handleServerRuning } from "../Controller/test.js";
import VerifyUser from "../Middleware/VerifyUser.js";
import UserModel from "../Model/User.js";

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
router.get("/test", handleServerRuning);
router.get("/view", async (req, res) => {
  console.log(req.cookies.jwt);
  if (req.cookies.jwt) {
    const response = await UserModel.find();
    res.json(response);
  } else {
    console.log("ERROR");
  }
});

export { router };
