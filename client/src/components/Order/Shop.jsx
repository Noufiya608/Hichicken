import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Shop.css";

const Shop = () => {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const deliveryCharge = 50;
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");

  // Fetch price
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/price/today");
        setPrice(res.data?.pricePerKg || 0);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPrice();
  }, []);

  // Calculate total
  useEffect(() => {
    setTotal(quantity * price + deliveryCharge);
  }, [quantity, price]);

  // Place order
  const placeOrder = async () => {
    try {
      await axios.post("http://localhost:5000/api/order", { quantity });
      setMessage("✅ Order placed successfully!");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to place order");
    }
  };

  return (
    <>
    {/* Navbar */}
      <header className="navbar">
        <h2 className="logo">HI CHICKEN</h2>
        <nav>
          <a href="/home">Home</a>
          <a href="/order">Shop</a>
          <a href="#">About</a>
          <a href="/contactus">Contact</a>
        </nav>
        <div className="cart">🛒</div>
      </header>
    <div className="shop-container">
      
      <div className="shop-card">
        
        <h1 className="title"> HI CHICKEN</h1>
        <p className="subtitle">Fresh & Halal Chicken Delivered</p>

        <div className="price-box">
          <p>Price per Kg</p>
          <h2>₹{price}</h2>
        </div>

        <div className="input-group">
          <label>Quantity (Kg)</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div className="row">
          <span>Delivery</span>
          <span>₹{deliveryCharge}</span>
        </div>

        <div className="row total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <button onClick={placeOrder}>Continue to Payment</button>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
    {/* Footer */}
      <footer className="footer">
        <div>
          <h4>About</h4>
          <p>Fresh halal chicken delivered daily.</p>
        </div>

        <div>
          <h4>Links</h4>
          <p>Home</p>
          <p>Shop</p>
        </div>

        <div>
          <h4>Follow</h4>
          <p>Instagram | Facebook</p>
        </div>
      </footer>
    </>
  );
};

export default Shop;