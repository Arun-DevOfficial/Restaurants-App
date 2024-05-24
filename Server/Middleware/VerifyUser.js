import jwt from "jsonwebtoken";
import UserModel from "../Model/User.js"; // Import your user model
import { configDotenv } from "dotenv";

//env file config
configDotenv();

const verifyAdmin = async (req, res, next) => {
  try {
    // Get the token from the request cookies
    const token = req.cookies.jwt;
    console.log(token);
    if (!token) {
      return res.status(401).json({
        message:
          "Permission denied. Please contact your administrator for assistance.",
      });
    }

    // Verify the Token
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    // Check if the user exists in the database based on username
    const user = await UserModel.findOne({
      email: decoded.email,
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid token. User not found." });
    }

    // Attach the user object to the request for further processing
    req.user = user;
    // Move to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error in verifyAdmin:", error);
    // Token verification failed
    return res.status(401).json({ message: "Invalid token." });
  }
};

export default verifyAdmin;
