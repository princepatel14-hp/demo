import { useEffect, useState } from "react";

function UseEffectExperiments() {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [effectRuns, setEffectRuns] = useState({
    noDependencies: 0,
    emptyDependencies: 0,
    counter: 0,
    counterAndScore: 0,
  });

  // 1. No dependency array:
  // Runs after the component renders, including after every state update.
  useEffect(() => {
    setEffectRuns((runs) => ({
      ...runs,
      noDependencies: runs.noDependencies + 1,
    }));
  });

  // 2. Empty dependency array:
  // Runs once after the component first appears on the page.
  useEffect(() => {
    setEffectRuns((runs) => ({
      ...runs,
      emptyDependencies: runs.emptyDependencies + 1,
    }));
  }, []);

  // 3. Counter dependency:
  // Runs after the first render, then whenever counter changes.
  useEffect(() => {
    setEffectRuns((runs) => ({
      ...runs,
      counter: runs.counter + 1,
    }));
  }, [counter]);

  // 4. Counter and score dependencies:
  // Runs after the first render, then whenever either value changes.
  useEffect(() => {
    setEffectRuns((runs) => ({
      ...runs,
      counterAndScore: runs.counterAndScore + 1,
    }));
  }, [counter, score]);

  return (
    <main>
      <h1>useEffect Experiments</h1>

      <section>
        <h2>Try changing the values</h2>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>
          Increase counter
        </button>
        <button onClick={() => setCounter(counter - 1)}>
          Decrease counter
        </button>

        <p>Score: {score}</p>
        <button onClick={() => setScore(score + 1)}>
          Increase score
        </button>
        <button onClick={() => setScore(score - 1)}>
          Decrease score
        </button>
      </section>

      <section>
        <h2>Effect run counts</h2>
        <p>No dependency array: {effectRuns.noDependencies}</p>
        <p>Empty dependency array: {effectRuns.emptyDependencies}</p>
        <p>Watching counter: {effectRuns.counter}</p>
        <p>Watching counter and score: {effectRuns.counterAndScore}</p>
      </section>
    </main>
  );
}

export default UseEffectExperiments;