import * as React from "react";
import { useState } from "react";
import "./ToDoApp.css";
import { ToDoListBlock } from "./ToDoListBlock";

const Counter = () => {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  const minusOne = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="Counter">
      <button onClick={addOne}>Add</button>
      <button onClick={minusOne}>Subtract</button>
      <button onClick={reset}>Reset</button>
      <div>Count:{count}</div>
    </div>
  );
};

export const ToDoApp = () => {
  return (
    <div>
      <div className="page">
        <h1>todos</h1>

        <div>
          <ToDoListBlock />
          <Counter />
        </div>
      </div>
    </div>
  );
};
