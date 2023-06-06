import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something Amazing with GPT-3 OpenAI
        </h1>

        <p>
          Introducing the revolutionary power of GPT-3 technology! With its
          immense knowledge and language prowess, GPT-3 is the ultimate AI tool
          for your website. Harness its ability to understand and generate
          human-like text, transforming content creation, translation, and code
          generation into seamless and efficient processes. Unlock limitless
          possibilities and propel your website to new heights with GPT-3's
          innovative capabilities for enhanced engagement, productivity, and
          problem-solving.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button"> Get Started </button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 requested access in the last 24 hours!</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
