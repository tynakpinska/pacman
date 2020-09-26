import React, { useState } from "react";
import './Board.css';
import Pacman from '../Pacman/Pacman';

const Board = () => {
  return (
    <div className='board'>
      {/* <Food /> */}
       <Pacman />
      {/* <Ghost /> */}
      {/* <Ghost /> */}
    </div>
  );
};

Board.defaultProps = {
  score: 0,
};

export default Board;
