import * as React from "react";
import "./ToDoList.css";

type TodoType = {
  text: string;
  isCompleted: boolean;
};

const todos: TodoType[] = [
  {
    text: "Make app",
    isCompleted: true,
  },

  {
    text: "Do the dishes",
    isCompleted: false,
  },

  {
    text: "Watch Youtube",
    isCompleted: false,
  },
];

export const ToDoList = () => {
  return (
    <div className="TodoItem">
      {todos.map((todoItem) => {
        return <div>{todoItem.text}</div>;
      })}
    </div>
  );
};
