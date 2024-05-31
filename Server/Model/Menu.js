import mongoose from "mongoose";

// Define food menu item schema
const foodMenuItemSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Define food menu schema
const foodMenuSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  items: {
    type: [foodMenuItemSchema],
    required: true,
  },
});

// Create and export FoodMenu model
const FoodMenuModel = mongoose.model("menu", foodMenuSchema);

export default FoodMenuModel;
