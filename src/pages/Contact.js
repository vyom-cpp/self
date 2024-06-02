// src/pages/Contact.js
import React from 'react';
import './css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Welcome to Cosmos</h1>
        <p>Begin by creating an account</p>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I have read the <span>terms</span> and <span>privacy policy</span>
            </label>
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;