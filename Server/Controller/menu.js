import MenuItem from "../Model/Menu.js";

export const handleMenuList = async (req, res) => {
  try {
    const category = await MenuItem.find();
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch" });
  }
};
