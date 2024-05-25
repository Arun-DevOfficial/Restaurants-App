import UserModel from "../Model/User.js";

const handleServerRuning = async (req, res) => {
  console.log(req.cookies.jwt);
  if (req.cookies.jwt) {
    const response = await UserModel.find();
    res.json(response);
  } else {
    console.log("ERROR");
  }
};

export { handleServerRuning };
