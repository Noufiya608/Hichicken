import React from "react";
import "./About.css";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons/lib";

export default function About() {
  return (
    <>
    {/* Navbar */}
          <header className="navbar">
            <h2 className="logo">HI CHICKEN</h2>
            <nav>
              <a href="/">Home</a>
           
              <a href="/About">About</a>
              <a href="/contactus">Contact</a>
            </nav>
            <IconContext.Provider value={{ size:"2em",color: "maroon" }}>
            <div className="cart"><CgProfile /></div></IconContext.Provider>
          </header>

    <div className="about">

      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Fresh & Hygienic Chicken Delivered to Your Doorstep</p>
      </div>

      {/* Content Section */}
      <div className="about-container">

        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
           ഇനി ശുദ്ധമായ ചിക്കൻ തേടി നിങ്ങൾ എവിടെയും പോകേണ്ടതില്ല. പ്രകൃതിദത്തവും ആരോഗ്യകരവുമായ രീതിയിൽ തയ്യാറാക്കിയ ചിക്കൻ നിങ്ങളുടെ വീട്ടുപടിക്കൽ ഞങ്ങൾ എത്തിക്കുന്നു
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver farm-fresh chicken with convenience,
            affordability, and safety. We aim to make quality meat accessible
            to every household.
          </p>

          <h2>Why Choose Us</h2>
          <ul>
            <li>പരമ്പരാഗതമായ ശുദ്ധി (Ethical Purity): വിശ്വാസ്യതയോടെയും എല്ലാവിധ ശുദ്ധിനിയമങ്ങൾ പാലിച്ചും മാത്രമാണ് ഞങ്ങൾ ഓരോ ചിക്കനും തയ്യാറാക്കുന്നത്</li>
            <li>ഓരോ ദിവസവും പുതുമയോടെ: ദിവസേന പുതുതായി തയ്യാറാക്കിയ ഫ്രഷ് ചിക്കൻ മാത്രമാണ് ഞങ്ങൾ വിതരണം ചെയ്യുന്നത്.</li>
            <li>സൗജന്യ ഡെലിവറി: അധിക ചിലവുകളെക്കുറിച്ച് ഇനി ആശങ്ക വേണ്ട; ഡെലിവറി ചാർജില്ലാതെ തന്നെ നിങ്ങളുടെ ഇഷ്ടസ്ഥലത്ത് ഞങ്ങൾ ചിക്കൻ എത്തിക്കും</li>
            <li>എളുപ്പത്തിൽ ഓർഡർ ചെയ്യാം: സമയം ലാഭിക്കാം! വെബ്സൈറ്റിലെ QR കോഡ് സ്കാൻ ചെയ്തുകൊണ്ട് നിങ്ങൾക്ക് നിമിഷങ്ങൾക്കുള്ളിൽ ഓർഡർ നൽകാവുന്നതാണ്</li>
          </ul>
        </div>

        {/* Notice Section */}
        <div className="notice-box">
          <h3>Important Notice</h3>
          <p>
            ഞങ്ങൾ ചിക്കൻ ശുചീകരണം, മുറിക്കൽ, പാക്കിംഗ് എന്നിവയിൽ കർശനമായ ശുചിത്വ മാനദണ്ഡങ്ങൾ പാലിക്കുന്നു.
ഓർഡർ പ്രോസസ്സ് ചെയ്തതിന് ശേഷം അത് റദ്ദാക്കാൻ സാധിക്കില്ല.
ഡെലിവറി സമയം സ്ഥലവും ആവശ്യകതയും ആശ്രയിച്ച് വ്യത്യാസപ്പെട്ടേക്കാം.
          </p>
        </div>

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
}