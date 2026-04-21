import React, { useState } from "react";
import axios from "axios";
import "./pay.css";

const Payment = () => {
  const [amount, setAmount] = useState(100);
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      // 1️⃣ Create order from backend
      const { data } = await axios.post(
        "http://localhost:5000/api/payment/create",
        { amount }
      );

      const order = data.order;

      // 2️⃣ Razorpay options
      const options = {
        key: "rzp_test_SeRoRZx6PRcPl4", // ⚠️ replace with your key
        amount: order.amount,
        currency: order.currency,
        name: "ansil",
        description: "Test Payment",
        order_id: order.id,

        handler: async function (response) {
          // 3️⃣ Verify payment
          const verifyRes = await axios.post(
            "http://localhost:5000/api/payment/verify",
            response
          );

          if (verifyRes.data.success) {
            alert("✅ Payment Successful");
          } else {
            alert("❌ Payment Failed");
          }
        },

        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();

      setLoading(false);
    } catch (error) {
      console.error(error);
      alert("Payment failed");
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <h2>Make Payment</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />

      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Payment;