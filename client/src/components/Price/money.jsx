import React, { useEffect, useState } from "react";
import axios from "axios";
import "./money.css";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import { BASE_URL } from "../../config";


const Money = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(null);
    

  // 👉 Navigate with full product data
  const handleOrder = (item) => {
    navigate("/order", { state: item });
  };

  // 🔥 Today's price
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/price/today`);
        setPrice(res.data?.pricePerKg || 0);
      } catch (err) {
        console.error(err);
        setPrice(0);
      }
    };
    fetchPrice();
  }, []);

  // 🔥 Products
  useEffect(() => {
    axios
      .get("https://hichicken1.onrender.com/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

const yesterdayPrice = 150;
const getTrend = () => {
  if (price === null) return null;

  if (price > yesterdayPrice) {
    return { symbol: "📈", color: "green", text: "Increased" };
  } else if (price < yesterdayPrice) {
    return { symbol: "📉", color: "red", text: "Decreased" };
  } else {
    return { symbol: "➖", color: "gray", text: "No Change" };
  }
};

const trend = getTrend();

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <div className="logo-container">
    <img src="/Chicken Logo.jpg" alt="Hi Chicken Logo" className="logo-img" />
  </div>
        <nav>
          <a href="/">Home</a>
          <a href="/About">About</a>
          <a href="/contactus">Contact</a>
        </nav>

        {/* <IconContext.Provider value={{ size: "2em", color: "maroon" }}>
        <div onClick={() => navigate("/profile")}>
  <CgProfile />
</div>
        </IconContext.Provider> */}
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay"></div>

      </section>

      {/* Price */}
     <section className="price-section">

  <div>
    <h2>Yesterday's Price</h2>
    <p>₹{yesterdayPrice}</p>
  </div>

  {/* 🔥 Arrow in middle */}
  <div className="price-trend">
    {price === null ? (
      <p>Loading...</p>
    ) : (
      <span style={{ color: trend.color, fontSize: "30px" }}>
        {trend.symbol}
      </span>
    )}
  </div>

  <div>
    <h2>Today's Price</h2>
    <p>{price === null ? "Loading..." : `₹${price}`}</p>
  </div>

</section>
{/* Trust Highlights */}
<section className="trust-section">
  <div className="trust-box">
    <img src="/ChatGPT Image May 18, 2026, 01_34_24 PM.png" alt="Fresh" />
    <h3>100% Fresh</h3>
    <p>Fresh chicken sourced daily for your family.</p>
  </div>

  <div className="trust-box">
    <img src="/ChatGPT Image May 18, 2026, 01_44_43 PM.png" alt="Hygienic" />
    <h3>Hygienic Cutting</h3>
    <p>Clean and safely processed meat.</p>
  </div>

  <div className="trust-box">
    <img src="/ChatGPT Image May 18, 2026, 01_37_30 PM.png" alt="Delivery" />
    <h3>Fast Delivery</h3>
    <p>Quick delivery by our Partners.</p>
  </div>

  <div className="trust-box">
    <img src="/ChatGPT Image May 18, 2026, 01_38_34 PM.png" alt="Quality" />
    <h3>Premium Quality</h3>
    <p>Best cuts with trusted quality.</p>
  </div>
</section>

{/* About Short Section */}
<section className="home-about">
  <div className="home-about-text">
    <h2>Fresh Chicken Delivered To Your Doorstep</h2>
    <p>
      HI CHICKEN provides fresh, clean, and premium quality chicken meat
      for every home. We focus on hygiene, freshness, and fast delivery
      so you can order confidently anytime.
    </p>
    <button onClick={() => navigate("/About")}>Know More</button>
  </div>

  <div className="home-about-img">
    <img src="/ChatGPT Image May 18, 2026, 01_39_53 PM.png" alt="Fresh Chicken Meat" />
  </div>
</section>

      {/* Products */}
      <section className="products">
        <h2>Our Fresh Cuts</h2>

        <div className="product-grid">
          {products.map((item) => (
            <div className="card" key={item._id}>
             
               <img src={item.image} alt={item.name} />
               
              
              <h4>{item.name}</h4>
              <p>₹{item.price}</p>

              {/* 🔥 SEND PRODUCT */}
              <button onClick={() => handleOrder(item)}>
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>
      <div>
      <section className="banner-container">
      <div className="banner-card">
        {/* Background Image Container */}
        <div className="banner-image-wrapper">
          <img 
            src="/heroimage.png" 
            alt="Fresh Chicken Cuts" 
            className="bg-image"
          />
          <div className="overlay"></div>
        </div>

        {/* Text Content */}
        <div className="banner-text-content">
          <h1 className="banner-title">HI CHICKEN</h1>
          <p className="banner-description">
            Order fresh, clean, and premium Quality chicken online and 
            get it delivered in minutes. we ensure every bite is fresh, safe, 
            and full of flavor.
          </p>
          <p className="banner-sub-description">
            Order From Anywhere Anytime without charging extra 
            delivery charges. quick scan to order now.
          </p>
        </div>
      </div>
    </section>
      <footer className="footer-wrapper">
       {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="footer-logo">
  <img src="/logo.jpeg" alt="Company Logo" />
</div>

        <div className="links">
          <h4>Products</h4>
          <p>Boneless</p>
          <p>Curry cuts</p>
          <p>Tenderloine</p>
          <p>Wholechicken</p>
        </div>

        <div className="links">
          <h4>Linka</h4>
          <p>FAQs</p>
          <p>About</p>
          <p>Help</p>
        </div>

        <div className="links">
          <h4>Follow</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          
        </div>
      </div>
    </footer>
    </div>
    </>
  );
};

export default Money;