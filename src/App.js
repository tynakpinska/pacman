import React, { useState } from 'react';
import Header from './Components/Header';
import Board from './Components/Board';
import './App.css';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
