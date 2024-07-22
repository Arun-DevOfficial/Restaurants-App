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
import { handleCheckoutPayment } from "../Controller/payments.js";

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
router.post("/signup", handleSignUp); // to register or create a an account
router.post("/login", handleLogin); // to become verify user
router.post("/logout", VerifyUser, handleLogout); // to logout if user login
router.get("/test", VerifyUser, handleServerRuning); // verify the click token
router.get("/menu", VerifyUser, handleMenuList); // to retrieve list client details
router.get("/search", handleSearchItem); // search api
router.post("/create-checkout-session", handleCheckoutPayment); // to create checkout sessio for payment.
router.get("/view", (req, res) => {
  res.json("Server is running...");
}); // whether server is runing or not.


export { router };
