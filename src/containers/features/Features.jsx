import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Efficiency",
    text: "AI has the potential to streamline processes, automate repetitive tasks, and improve overall efficiency in various aspects of life, saving time and effort for individuals.",
  },
  {
    title: "Personalize",
    text: "AI can analyze vast amounts of data to understand individual preferences and provide tailored recommendations or experiences, making everyday interactions and choices more personalized and enjoyable.",
  },
  {
    title: "Assistance",
    text: "AI-powered virtual assistants and chatbots can provide valuable support and guidance, helping individuals with tasks, answering questions, and providing information, thereby enhancing productivity and convenience.",
  },
  {
    title: "Innovation",
    text: "AI is at the forefront of technological advancements, driving innovation in various fields such as healthcare, transportation, and entertainment. Embracing AI opens up opportunities for groundbreaking discoveries, improved services, and exciting new possibilities.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future Is Now! Step Into The Future And Don't Miss Out.
      </h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
