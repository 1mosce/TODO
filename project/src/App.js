import React from "react";
import Input from "./components/input.js";

import "./App.css";
import TodoItem from "./components/TodoItem.js";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/TodoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__todoContainer">
          {todoList.map((item) => (
            <TodoItem name={item.item} dome={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
