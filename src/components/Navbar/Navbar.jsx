import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Catherine Huang</h1>
        <div className="info-bar">
          <p className="info-item">Student, Tech Enthusiast, Pianist | catherinehuang@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link
            className="info-link"
            to={{ pathname: "https://github.com/musicalcat" }}
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.linkedin.com/in/catherinehuang82/" }}
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            className="info-link"
            to={{ pathname: "https://www.youtube.com/user/CatherineZHuang" }}
            target="_blank"
          >
            YouTube
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/about" }}>
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/education" }}>
            Education and Awards
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/experience" }}>
          Experience
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/projects" }}>
            Coding Projects
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to={{ pathname: "/piano" }}>
            Piano Performances
          </Link>
        </div>

      </div>
    </>
  );
}
