import React, { useState, useEffect, useMemo } from "react";
import "./css/Home.css";
import myImage from "../assets/man.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const texts = useMemo(() => ["Computers", "Learner", "Cricket"], []);

  useEffect(() => {
    let currentText = texts[textIndex];
    const interval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedText((prev) => prev + currentText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setDisplayedText("");
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000); // Pause before switching to the next word
        clearInterval(interval);
      }
    }, 200); // Adjust speed of typing here

    return () => clearInterval(interval);
  }, [charIndex, textIndex, texts]);

  return (
    <div className="home-container">
      <div className="main-content">
        <div className="left-section">
          <h1>I'm Vyom</h1>
          <h2>{displayedText}</h2>
          <div className="social-icons">
            <a
              href="https://github.com/vyom-cpp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://instagram.com/vyom._14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com/vyom_sutariya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="right-section">
          <img src={myImage} alt="Home" />
        </div>
      </div>
    </div>
  );
}

export default Home;