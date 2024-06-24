import mongoose from "mongoose";

const { Schema } = mongoose;

// Define a schema for items
const itemSchema = new Schema({
  image_url: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true },
});

// Define a schema for categories.
const categorySchema = new Schema({
  name: { type: String, required: true },
  items: [itemSchema],
});

// Model for the combined schema
const MenuItem = mongoose.model("menus", categorySchema);

export { MenuItem };
