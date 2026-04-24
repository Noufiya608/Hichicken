import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,

  address: {
    type: String,
    required: true,
    enum: ["Manacaud", "Ambalathara", "Azad Nagar"]   // 👈 dropdown values
  },

  guestaddress: {
    type: String,
    required: false,
    enum: ["Manacaud", "Ambalathara", "Azad Nagar"]   // 👈 dropdown values
  },

  isAdmin: {
    type: Boolean,
    default: false
  },

  otp: Number,
  otpExpire: Date

}, { timestamps: true });

export default mongoose.model("User", userSchema);