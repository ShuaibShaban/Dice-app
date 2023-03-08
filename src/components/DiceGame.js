import React, { useState } from "react";

function DiceGame() {
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState(1);

  const roll = () => {
    setRolling(true);
    setTimeout(() => {
      setResult(Math.floor(Math.random() * 6) + 1);
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="dice-container">
      <div
        className={`dice ${rolling ? "rolling" : ""}`}
        onClick={roll}
        style={{ "--result": result }}
      >
        <div className="dice-face dice-face-1"></div>
        <div className="dice-face dice-face-2"></div>
        <div className="dice-face dice-face-3"></div>
        <div className="dice-face dice-face-4"></div>
        <div className="dice-face dice-face-5"></div>
        <div className="dice-face dice-face-6"></div>
      </div>
    </div>
  );
}

export default DiceGame;
