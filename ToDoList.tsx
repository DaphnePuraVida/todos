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


function myFunction() {
  document.getElementById("demo").style.color = "red";
};

export const ToDoList = () => {
  return (
    
    <div className="TodoItem" id="demo" onclick={ myFunction}>
      {todos.map((todoItem) => {
        return <div>{todoItem.text}
        </div>;
      })}
    </div>
  );
};
