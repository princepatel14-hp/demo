import { useState } from "react";

function Counter() {
  // Store the current counter value. It starts at 0.
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Interactive Counter</h2>

      {/* This value updates whenever count changes */}
      <p>Current value: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase by 1
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease by 1
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <button onClick={() => setCount(count + 5)}>
        Increase by 5
      </button>
    </section>
  );
}

export default Counter;