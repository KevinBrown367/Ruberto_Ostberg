import React from "react";
import ourGoal from "../data/images/ourgoal.png";

function About() {
  return (
    <div>
      <h1>Ruberto Ostberg Gallery</h1>
      <p>
        We are located on a quiet residential street in Calgary, Alberta and
        provide a relaxing spin on the Canadian contemporary arts scene.
      </p>
      <p></p>
      <p>
        The Ruberto Ostberg Gallery has since become a favorite haunt of
        corporate buyers, collectors and drop-in community visitors. Contained
        within the gallery space is The Purple Door Art Studio, a vibrant centre
        for artists both established and emerging.
      </p>
      <p></p>
      <p>
        Visitors can view exhibits, talk to artists at work and even take art
        classes through the Purple Door Art Studio.
      </p>
      <p></p>
      <img src={ourGoal} alt="ourgoal" />
    </div>
  );
}

export default About;
