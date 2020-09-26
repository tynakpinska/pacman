import React from "react";
import "./Board.css";
import Pacman from "../Pacman/Pacman";
import Ghost from "../Ghost/Ghost";
import Food from "../Food/Food";

const Board = () => {
  return (
    <div className="board">
      <Food position={{ top: 300, left: 50 }} />
      <Food position={{ top: 100, left: 100 }} />
      <Food position={{ top: 200, left: 200 }} />
      <Pacman />
      {/* <Ghost color="red" />
      <Ghost color="yellow" />
      <Ghost color="blue" /> */}
      <Ghost color="pink" />
    </div>
  );
};

Board.defaultProps = {
  score: 0,
};

export default Board;
