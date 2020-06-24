import * as React from "react";
import "./ToDoListBlock.css";
import { ToDoList } from "./ToDoList";

export const ToDoListBlock = () => {
  return (
    <div className="Block">
      <input type="text" id="InputTask" placeholder="What needs to be done?" />
      <ToDoList />
    </div>
  );
};
