import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {
  handleSignUp,
  handleLogin,
  handleLogout,
} from "../Controller/userAuth.js";
import { LoggerMiddleware } from "../Middleware/Logger.js";
import { handleServerRuning } from "../Controller/test.js";
import VerifyUser from "../Middleware/VerifyUser.js";
import { handleMenuList, handleSearchItem } from "../Controller/menu.js";
import verifyAdmin from "../Middleware/VerifyUser.js";

// Router Config
const router = express.Router();

// Middleware
router.use(LoggerMiddleware);
router.use(express.json());
router.use(cookieParser());
router.use(
  cors({
    origin: `${
      process.env.DEVELOPMENT_PHASE === "Production"
        ? "https://restaurants-app-green.vercel.app"
        : `http://localhost:5173`
    }`,

    credentials: true,
  })
);

// Routes
router.post("/signup", handleSignUp);
router.post("/login", handleLogin);
router.post("/logout", handleLogout);
router.get("/test", VerifyUser, handleServerRuning);
router.get("/menu", handleMenuList);
router.get("/search", handleSearchItem);
router.get("/view", (req, res) => {
  res.json("Server is running...");
});

export { router };
