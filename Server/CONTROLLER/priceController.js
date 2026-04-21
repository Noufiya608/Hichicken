import Price from "../MODEL/priceModel.js";

// GET today's price
export const getTodayPrice = async (req, res) => {
  try {
    const price = await Price.findOne().sort({ date: -1 });
    res.json(price);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST update price
export const updatePrice = async (req, res) => {
  try {
    const { pricePerKg } = req.body;

    const newPrice = new Price({ pricePerKg });
    await newPrice.save();

    res.json(newPrice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};