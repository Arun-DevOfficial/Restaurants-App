import mongoose from "mongoose";

// Define User_Auth schema
const userAuthSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create and export User_Auth model
const UserModel = mongoose.model("User_Auth", userAuthSchema);

export default UserModel;
