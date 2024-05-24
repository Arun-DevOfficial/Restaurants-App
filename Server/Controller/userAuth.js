import UserModel from "../Model/User.js";
import bcrypt from "bcrypt";

const handleSignUp = async (req, res) => {
  const { fullName, email, password } = req.body;

  //Error Handling
  try {
    // Check if both username, password, and role are provided
    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Fullname, email, password are required!" });
    }

    // Check if the user already exists with the same username and role
    const existingUser = await UserModel.findOne({
      fullName: fullName,
      email: email,
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists. Please try to login instead.",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with the provided role
    const newUser = new UserModel({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Registration successful
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: "Internal server error" });
  }
};

const handleLogin = async (req, res) => {
  const { fullName, email, password } = req.body;

  //Error Handling
  try {
    // Check if both username, password, and role are provided
    if (!fullName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Fullname, email, password are required!" });
    }

    // Check if the user with the same username and role exists
    const existingUser = await UserModel.findOne({
      fullName: fullName,
      email: email,
    });

    if (!existingUser) {
      // User doesn't exist
      return res.status(401).json({ message: "User not found." });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (passwordMatch) {
      return res.status(200).json({ message: "User login successfully." });
    } else {
      // Password doesn't match
      return res
        .status(401)
        .json({ message: "Incorrect username or password." });
    }
  } catch (error) {
    // Internal server error
    console.error("Error in sign in:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { handleSignUp, handleLogin };
