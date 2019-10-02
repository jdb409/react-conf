import React from "react";
import "./App.css";
import Counter from "./hooks/Counter";
import CounterHooks from "./hooks/CounterHooks";
import WindowResizeHooks from "./hooks/WindowResizeHooks";
import WindowResize from "./hooks/WindowResize";
import WithCounter from "./hooks/WithCounter";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
