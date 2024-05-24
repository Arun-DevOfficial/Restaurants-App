const handleSignUp = async (req, res) => {
  const { fullName, email, password } = req.body.data;

  //Check if email and password are provided
  if (!email || !password || !fullName) {
    return res.status(400).json({ error: "Please fill in all fields" });
  }
  //Error Handling
  try {
    // Here you could simulate saving the user to a database
    // For demonstration purposes, we'll just log the user details
    console.log("User signed up:", { email, password });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const handleLogin = (req, res) => {
  res.json({ message: "Login is working..." });
};

export { handleSignUp, handleLogin };
