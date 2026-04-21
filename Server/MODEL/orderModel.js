import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true
  },
  pricePerKg: {
    type: Number,
    required: true
  },
  deliveryCharge: {
    type: Number,
    default: 0
  },
  totalAmount: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Order", orderSchema);