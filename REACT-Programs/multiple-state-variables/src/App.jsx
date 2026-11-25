import { useState } from "react";
import "./App.css";

function App() {
  // Each value has its own state variable
  const [counter, setCounter] = useState(0);
  const [username, setUsername] = useState("Guest");
  const [score, setScore] = useState(0);
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  function handleCounterChange(amount) {
    setCounter(counter + amount);
    setNumberOfClicks(numberOfClicks + 1);
  }

  function handleScoreChange(amount) {
    setScore(score + amount);
    setNumberOfClicks(numberOfClicks + 1);
  }

  function handleUsernameChange(event) {
    setUsername(event.target.value);
    setNumberOfClicks(numberOfClicks + 1);
  }

  function resetValues() {
    setCounter(0);
    setUsername("Guest");
    setScore(0);
    setNumberOfClicks(numberOfClicks + 1);
  }

  return (
    <main className="app">
      <h1>Multiple State Variables</h1>
      <p>Use the controls to update each value.</p>

      <section className="dashboard">
        <div className="card">
          <h2>Counter</h2>
          <p>{counter}</p>
        </div>

        <div className="card">
          <h2>Username</h2>
          <p>{username || "Guest"}</p>
        </div>

        <div className="card">
          <h2>Score</h2>
          <p>{score}</p>
        </div>

        <div className="card">
          <h2>Number of Clicks</h2>
          <p>{numberOfClicks}</p>
        </div>
      </section>

      <section className="controls">
        <h2>Change the counter</h2>
        <button onClick={() => handleCounterChange(1)}>Add 1</button>
        <button onClick={() => handleCounterChange(-1)}>Subtract 1</button>

        <h2>Change the username</h2>
        <input
          type="text"
          placeholder="Enter a username"
          value={username === "Guest" ? "" : username}
          onChange={handleUsernameChange}
        />

        <h2>Change the score</h2>
        <button onClick={() => handleScoreChange(10)}>Add 10 points</button>

        <h2>Reset</h2>
        <button onClick={resetValues}>Reset values</button>
      </section>
    </main>
  );
}

export default App;