import React, { useState, useEffect } from "react";

function CounterHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <div>count: {count}</div>
    </div>
  );
}

export default CounterHooks;
