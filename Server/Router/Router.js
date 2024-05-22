import Express from "express";
import { handleSignUp, handleLogin } from "../Controller/userAuth.js";
import { LoggerMiddleware } from "../Middleware/Logger.js";

//Router Config
const router = Express.Router();
router.use(LoggerMiddleware);

//Router Path
router.route("/").get(handleSignUp);

export { router };
