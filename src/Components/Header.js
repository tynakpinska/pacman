import React from "react";
import './style.css';

const Header = ({ score }) => {
  return (
    <header>
      <span>SCORE: {score} </span>
    </header>
  );
};

Header.defaultProps = {
  score: 0,
};

export default Header;
