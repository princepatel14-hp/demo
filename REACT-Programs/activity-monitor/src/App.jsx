import { useEffect, useState } from "react";
import "./App.css";

function ActivityCard({ title, value, description }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      <p className="value">{value}</p>
      <p className="description">{description}</p>
    </section>
  );
}

export default function App() {
  // Each piece of information has its own state variable.
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState("Alex");
  const [counterActions, setCounterActions] = useState(0);
  const [scoreChanges, setScoreChanges] = useState(0);

  // Runs once, after the component first appears.
  useEffect(() => {
    console.log("Activity Monitor is ready.");
  }, []);

  // Runs after every render because there is no dependency array.
  useEffect(() => {
    console.log("The component rendered.");
  });

  // Runs on the first render, then whenever counter changes.
  useEffect(() => {
    console.log("Counter changed to:", counter);
  }, [counter]);

  // Runs on the first render, then whenever score changes.
  // This effect updates another state variable: scoreChanges.
  useEffect(() => {
    // Don't count the initial score (0) as a user change.
    if (score !== 0) {
      setScoreChanges((previousTotal) => previousTotal + 1);
    }
  }, [score]);

  function changeCounter(amount) {
    setCounter((currentCounter) => currentCounter + amount);
    setCounterActions((total) => total + 1);
  }

  function changeScore(amount) {
    setScore((currentScore) => currentScore + amount);
  }

  return (
    <main className="dashboard">
      <header className="header">
        <p className="eyebrow">ACTIVITY MONITOR</p>
        <h1>Hello, {username}!</h1>
        <label className="username-label">
          Change username
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your name"
          />
        </label>
      </header>

      <div className="cards">
        <ActivityCard
          title="Current Counter"
          value={counter}
          description="Your current counter value"
        />

        <ActivityCard
          title="Current Score"
          value={score}
          description="Your current score"
        />

        <ActivityCard
          title="Counter Actions"
          value={counterActions}
          description="Times you used a counter button"
        />

        <ActivityCard
          title="Score Changes"
          value={scoreChanges}
          description="Times your score changed"
        />
      </div>

      <section className="controls">
        <div className="control-group">
          <h2>Counter</h2>
          <button onClick={() => changeCounter(-1)}>− Decrease</button>
          <button onClick={() => changeCounter(1)}>+ Increase</button>
        </div>

        <div className="control-group">
          <h2>Score</h2>
          <button onClick={() => changeScore(-1)}>− Decrease</button>
          <button onClick={() => changeScore(1)}>+ Increase</button>
        </div>
      </section>
    </main>
  );
}