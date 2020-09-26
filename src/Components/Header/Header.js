import React from "react";
import './Header.css';

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
