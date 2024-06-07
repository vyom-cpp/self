import React from "react";
import "./css/Projects.css";
import todolist from "../assets/todolist.png";
import calculator from "../assets/calculator.png";
import tictactoe from "../assets/tictactoe.png";
import qrcodemaker from "../assets/qrcodemaker.png";
import randomcolor from "../assets/randomcolor.png";
import quotemachine from "../assets/quotemachine.png";
import githubprofilefinder from "../assets/githubprofilefinder.png";

const projects = [
  { name: "Todo List", image: todolist },
  { name: "Calculator", image: calculator },
  { name: "Tic Tac Toe", image: tictactoe },
  { name: "QR Code Maker", image: qrcodemaker },
  { name: "Random Color Generator", image: randomcolor },
  { name: "Quote Machine", image: quotemachine },
  { name: "GitHub Profile Finder", image: githubprofilefinder },
];

function Projects() {
  return (
    <div className="container">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.name}
              className="project-image"
            />
            <div className="overlay">
              <div className="project-name">{project.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;