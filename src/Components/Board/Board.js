import React from "react";
import "./Board.css";
import Pacman from "../Pacman/Pacman";
import Ghost from "../Ghost/Ghost";

const Board = () => {
  return (
    <div className="board">
      {/* <Food /> */}
      <Pacman />
      <Ghost color="red" />
      <Ghost color="yellow" />
      <Ghost color="blue" />
      <Ghost color="pink" />
    </div>
  );
};

Board.defaultProps = {
  score: 0,
};

export default Board;
