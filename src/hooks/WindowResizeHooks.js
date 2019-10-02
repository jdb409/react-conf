import React from "react";
import { useWindowWidth } from "./hooks";

function CounterHooks() {
  const width = useWindowWidth();

  return <div>The width of the screen is {width}</div>;
}

export default CounterHooks;
