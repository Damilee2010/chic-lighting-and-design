import "../styles/Contact.css";
import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section className="contact fade-in" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Feedback & Contact</h2>
          <p>We'd love to hear from you — questions, custom orders, or feedback.</p>
        </div>

        <div className="contact-card">
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="rating">Your Rating</label>
              <select id="rating">
                <option value="">Select a rating</option>
                <option value="5">5 - Excellent</option>
                <option value="4">4 - Good</option>
                <option value="3">3 - Average</option>
                <option value="2">2 - Poor</option>
                <option value="1">1 - Terrible</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" placeholder="Tell us what's on your mind..." required></textarea>
            </div>

            <button type="submit" className="btn">
              <i className="fa-regular fa-paper-plane"></i>
              <span>Send Message</span>
            </button>
          </form>

          {submitted && (
            <div className="success-message">
              <i className="fa-solid fa-check-circle"></i>
              <p>Thank you! We'll get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
