import React from "react";

const Board = ({ score }) => {
  return (
    <div>
      <span>SCORE: {score} </span>
    </div>
  );
};

Board.defaultProps = {
  score: 0,
};

export default Board;
