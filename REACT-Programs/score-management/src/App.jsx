import { useEffect, useState } from "react";

function ScoreManager() {
  const [score, setScore] = useState(0);
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    console.log("New score:", score);
    setChangeCount((count) => count + 1);
  }, [score]);

  function addPoints() {
    setScore((currentScore) => currentScore + 10);
  }

  function removePoints() {
    setScore((currentScore) => currentScore - 10);
  }

  function resetScore() {
    setScore(0);
  }

  return (
    <section>
      <h2>Score Management</h2>

      <p>Current score: {score}</p>
      <p>Score changes: {changeCount}</p>

      <button onClick={addPoints}>Add 10 points</button>
      <button onClick={removePoints}>Remove 10 points</button>
      <button onClick={resetScore}>Reset score</button>
    </section>
  );
}

export default ScoreManager;