// src/pages/Contact.js
import React from 'react';
import './css/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      <form className="contact-form">
        <input type="email" placeholder="Enter a valid email address" />
        <input type="text" placeholder="Enter your Name" />
        <input type="date" placeholder="mm/dd/yyyy" />
        <textarea placeholder="Enter your message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
