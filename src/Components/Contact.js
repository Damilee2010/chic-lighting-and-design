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
      <h2>Feedback & Contact</h2>
      <p>We'd love to hear from you — questions, custom orders, or feedback.</p>

      <form onSubmit={handleSubmit}>
       <div className="form">
        <label htmlFor="name">Your Name:</label>
         <input type="text" id="name" placeholder="Your Name" required />
       </div>
         <div className="form">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Email" required />
         </div>
           <div className="form">
          <label htmlFor="rating">Your Rating:</label>
          <select id="rating">
            <option>5 - Excellent</option>
            <option>4 - Good</option>
            <option>3 - Average</option>
            <option>2 - Poor</option>
            <option>1 - Terrible</option>
          </select>
         </div>
         <div className="form">
          <label htmlFor="message">Your Message:</label>
          <textarea id="message" placeholder="Your Message" required></textarea>
         </div>
        
         <div className="form">
          <button type="submit" className="btn">
            <i className="fa-regular fa-paper-plane"></i>
            Submit Feedback
          </button>
         </div>
      </form>

      {submitted && <p className="success">Thank you! We'll get back to you soon.</p>}
    </section>
  );
}