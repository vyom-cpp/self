import React from "react";
import "./css/Gallery.css";
import photo1 from "../assets/1.jpg";
import photo2 from "../assets/10.jpg";
import photo3 from "../assets/12.jpeg";
import photo4 from "../assets/2.jpg";
import photo5 from "../assets/6.jpg";
import photo6 from "../assets/7.jpg";
import photo7 from "../assets/9.jpg";
import photo8 from "../assets/3.JPG";
import photo9 from "../assets/4.JPG";

const photos = [
  { image: photo1 },
  { image: photo2 },
  { image: photo3 },
  { image: photo4 },
  { image: photo5 },
  { image: photo6 },
  { image: photo7 },
  { image: photo8 },
  { image: photo9 },
];

function Gallery() {
  return (
    <div className="container">
      <h1>Some of my clicks</h1>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div className="gallery-card" key={index}>
            <img src={photo.image} alt="images" className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;