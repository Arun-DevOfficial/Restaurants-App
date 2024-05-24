const handleServerRuning = (req, res) => {
  // res.json("Server is running");

  const cookieOptions = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(201).cookie("jwt", "hsjhgjshg", cookieOptions).json("Cookie sent");
};

export { handleServerRuning };
