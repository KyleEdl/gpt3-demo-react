import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is GPT-3"
        text="
        GPT-3 is an advanced artificial intelligence model that understands and generates human-like text, capable of assisting with tasks, providing information, and creating natural language interactions, making it a powerful tool for various applications and enhancing everyday experiences. It is designed to process and generate text in a way that mimics human language, enabling it to perform tasks like answering questions, writing essays, or engaging in conversations."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination!
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Friendly and efficient virtual assistants, available 24/7 to provide instant support, answer questions, and make your life easier."
      />
      <Feature
        title="Knowledgebase"
        text="Unlocks instant access to a vast digital encyclopedia, enriching your understanding with accurate and comprehensive information on any topic."
      />
      <Feature
        title="Education"
        text="An intelligent learning companion that provides personalized guidance, answers questions, and creates engaging educational experiences."
      />
    </div>
  </div>
);

export default WhatGPT3;
