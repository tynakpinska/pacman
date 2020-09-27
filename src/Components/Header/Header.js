import React from "react";
import Heart from "./like.svg";
import "./Header.css";

const Header = ({ score, lives }) => {
  const hearts = [];
  for (let i = 0; i < lives; i++) {
    hearts.push(Heart);
  }

  return (
    <header>
      <span>SCORE: {score} </span>
      <div className="hearts">
        {hearts.map(h => (
          <img src={h} alt="heart" />
        ))}
      </div>
    </header>
  );
};

Header.defaultProps = {
  score: 0,
};

export default Header;
