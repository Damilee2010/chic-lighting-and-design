import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="top">
        {/* About Us */}
        <div className="about">
          <h2>About Us</h2>
          <p>
            Since 1971, bringing elegant<br />
            lighting solutions to homes<br />
            and businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="about">
          <h2>Quick Links</h2>
          <p>Site Map</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>

        {/* Contact */}
        <div className="about">
          <h2>Contact</h2>
          <p><i className="fa-solid fa-location-dot"></i>45A Muri Okunola, VI, Lagos</p>
          <p><i className="fa-solid fa-signs-post"></i>City, State 12345</p>
          <p><i className="fa-solid fa-envelope"></i>info@chiclighting.com</p>
          <p><i className="fa-solid fa-phone"></i>+234 708 342 8766</p>
        </div>

        {/* Download */}
        <div className="about">
          <h2>Download</h2>
          <a
            href="/files/sample.pdf"
            download="ChicLighting_Catalog_2025.pdf"
            className="btn2"
          >
            Download Catalog
          </a>
        </div>
      </div>

      <div className="bottom">
        <p>© 2025 Chic Lighting And Design — All rights reserved.</p>
      </div>
    </footer>
  );
}