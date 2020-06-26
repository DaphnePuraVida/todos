import * as React from "react";
import "./ToDoApp.css";
import { ToDoListBlock } from "./ToDoListBlock";


export const ToDoApp = () => {
  return (
    <div>
      <div className="page">
        <h1>todos</h1>
      </div>
      <div>
        <ToDoListBlock />
        
      </div>
    </div>
  );
};
