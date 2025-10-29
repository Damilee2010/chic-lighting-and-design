  import React from "react";
  import { Link } from 'react-router-dom';
  import "../styles/Hero.css";

  function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Illuminate Your Space<br />
          <span className="span">Elegance</span>
        </h1>
        <p className="hero-lead">
          Since 1971, we have been bringing unique lighting and accessories from the most elegant traditional to refined contemporary for today's eclectic interiors.
        </p>
        <div className="hero-features">
          <span><i className="fa-solid fa-check" style={{ color: '#fbbf24', fontSize: '0.8em' }}></i> Free Shipping</span>
          <span><i className="fa-solid fa-check" style={{ color: '#fbbf24', fontSize: '0.8em' }}></i>Lifetime Warranty</span>
          <span><i className="fa-solid fa-check" style={{ color: '#fbbf24', fontSize: '0.8em' }}></i>Expert Installation</span>
        </div>
        <Link to="/contact">
          <button className="btn">Book Consultation</button>
        </Link>
      </div>

      <div className="hero-images">
        <img src="/Images/floor-lamp.jpg" alt="Modern sculptural floor lamp" className="big" />
        <img src="/Images/image-1.png" alt="Minimalist ceiling light" className="sml" />
        <img src="/Images/hero.jpg" alt="Elegant spiral pendant light" className="big" />
        <img src="/Images/image-2.png" alt="Designer table lamp with plants" className="sml" />
      </div>
    </section>
  );
}

  export default Hero;
