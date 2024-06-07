import React from "react";
import "./css/About.css";
import myImage from "../assets/Me.jpeg";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <div className="about-image">
          <img src={myImage} alt="About Me" />
        </div>
        <div className="about-description">
          <h1>About Me</h1>
          <p>
            I'm Vyom, a passionate full stack developer with expertise in
            React.js and Node.js. Seamlessly bridging frontend and backend
            development, I excel in architecting innovative solutions. Committed
            to continuous learning, I'm shaping the future of technology, one
            line of code at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;