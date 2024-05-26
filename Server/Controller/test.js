import UserModel from "../Model/User.js";

const handleServerRuning = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    // Assuming you have a method in UserModel to retrieve user details by JWT
    const userDetails = await UserModel.find();

    // Check if user details were found
    if (userDetails) {
      // Send user details as response
      res.status(200).json(userDetails);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error while fetching user details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { handleServerRuning };
