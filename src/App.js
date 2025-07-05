import React, { useState } from "react";
import "./App.css"; // Make sure this line is present

function App() {
  const [showTarget, setShowTarget] = useState(false);
  const [message, setMessage] = useState("Click Start to Begin!");
  const [startTime, setStartTime] = useState(null);
  const [targetPosition, setTargetPosition] = useState({ top: "50%", left: "50%" });

  const startGame = () => {
    setMessage("Wait for it...");
    setShowTarget(false);

    const delay = Math.floor(Math.random() * 3000) + 2000; // 2s - 5s delay
    setTimeout(() => {
      const top = Math.random() * 80 + 10;
      const left = Math.random() * 80 + 10;
      setTargetPosition({ top: `${top}%`, left: `${left}%` });
      setStartTime(Date.now());
      setShowTarget(true);
    }, delay);
  };

  const handleClick = () => {
    const reactionTime = Date.now() - startTime;
    setMessage(`🎉 Your Reaction Time: ${reactionTime} ms`);
    setShowTarget(false);
  };

  return (
    <div className="App">
      <h1>🎯 Click the Target Game</h1>
      <button onClick={startGame}>Start Game</button>
      <h2>{message}</h2>

      {showTarget && (
        <div
          className="target"
          style={{
            top: targetPosition.top,
            left: targetPosition.left,
          }}
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default App;
