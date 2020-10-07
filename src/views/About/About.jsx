import React from "react";
import "./About.css";
import Headshot from "../../assets/headshot.jpg";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
          <div className="intro-item">
              <img src={Headshot} className = "intro-picture"></img>
          </div>
          <div className="intro-item">
          <p>Hi there! My name is Catherine Huang, and I'm a first-year student from San Jose, California currently living on campus in Canaday.</p>
          <p>I plan to concentrate in Applied Math, CS, or Statistics and am also interested in music, economics, finance, medicine, and Spanish (considering getting a language citation!).</p>
          <p>To learn more about me beyond my "Harvard Intro," click around on this site!</p>
          </div>
      </div>
    </div>
  );
}
