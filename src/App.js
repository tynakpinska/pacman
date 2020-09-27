import React, { useState } from "react";
import Header from "./Components//Header/Header";
import Board from "./Components/Board/Board";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const addPoint = () => {
    setScore(score+1)
  }
  const loseLive = () => {
    setLives(lives-1)
  }
  return (
    <div className="App">
      <Header score={score} lives={lives}/>
      <Board setScore={addPoint} setLives={loseLive}/>
    </div>
  );
}

export default App;
