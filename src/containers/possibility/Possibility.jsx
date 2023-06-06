import React from "react";
import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">
        The Possibilities Are <br /> Beyond Your Imagination
      </h1>
      <p>
        The possibilities are beyond our imagination with GPT-3, an advanced
        language model that can generate creative content, provide insightful
        answers, and assist in a wide range of tasks, empowering individuals and
        businesses to achieve new levels of efficiency and innovation. Its
        ability to understand and generate human-like text opens up endless
        opportunities for collaboration, education, and problem-solving,
        revolutionizing the way we interact with technology.
      </p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;
