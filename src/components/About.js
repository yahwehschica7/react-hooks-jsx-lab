import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
      <p>I like books and coffee.</p>
      <img src={ image } alt="I made this"/>
  </div>
  // return <div>About</div>;
}

export default About;
