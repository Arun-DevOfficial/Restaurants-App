import MenuItem from "../Model/Menu.js";

export const handleMenuList = async (req, res) => {
  try {
    const category = await MenuItem.find();
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch" });
  }
};

export const handleSearchItem = async (req, res) => {
  const Query = req.query.q;

  //To handle filtered category
  try {
    const response = await MenuItem.find({ name: Query });
    res.json(response); // Return the response as JSON
  } catch (error) {
    res.status(404).json({ Error: "Category Not Found!" }); // Return a 404 error with a JSON response
  }
};
