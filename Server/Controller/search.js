import MenuItem from "../Model/Menu.js";

const handleSearchItem = async (req, res) => {
  const Query = req.query.q; // Assuming the query parameter is 'q'
  try {
    const response = await MenuItem.find({ name: Query });
    res.json(response); // Return the response as JSON
  } catch (error) {
    res.status(404).json({ Error: "Category Not Found!" }); // Return a 404 error with a JSON response
  }
};

export { handleSearchItem };
