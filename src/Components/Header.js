import React from "react";

const Header = ({ score }) => {
  return (
    <div>
      <span>SCORE: {score} </span>
    </div>
  );
};

Header.defaultProps = {
  score: 0,
};

export default Header;
