import React, { useState } from 'react';
import axios from 'axios';
import './css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    suggestions: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = process.env.ENVIROMENT === "dev"
                                        ? "http://localhost:5000/api/contact"
                                        : "https://website-backend-cnek.onrender.com/api/contact"
    try {
      const response = await axios.post(url, formData);
      console.log('Form submitted successfully:', response.data);
      setFormData({ name: '', phone: '', suggestions: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="suggestions"
            placeholder="Suggestions"
            value={formData.suggestions}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;