import Order from "../MODEL/orderModel.js";
import Price from "../MODEL/priceModel.js";

export const createOrder = async (req, res) => {
  try {
    const { quantity } = req.body;

    // 🔹 Get latest price
    const latestPrice = await Price.findOne().sort({ date: -1 });

    if (!latestPrice) {
      return res.status(404).json({ message: "Price not set" });
    }

    const pricePerKg = latestPrice.pricePerKg;

    // 🔹 Set delivery charge (you can customize)
    const deliveryCharge = 50;

    // 🔹 Calculate total
    const totalAmount = (quantity * pricePerKg) + deliveryCharge;

    // 🔹 Save order
    const newOrder = new Order({
      quantity,
      pricePerKg,
      deliveryCharge,
      totalAmount
    });

    await newOrder.save();

    res.json(newOrder);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ date: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};