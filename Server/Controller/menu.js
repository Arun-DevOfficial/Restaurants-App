import FoodMenuModel from "../Model/Menu.js";


export const handleMenuList = async (req, res) => {
  try {
    const { category } = req.query;
    let foodMenuItems;

    if (!category) {
      // If no category specified, return all menu items
      foodMenuItems = await FoodMenuModel.find({});
    } else {
      // If category specified, return items for that category
      foodMenuItems = await FoodMenuModel.find({ category: category });
    }

    res.json(foodMenuItems);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch" });
  }
};
