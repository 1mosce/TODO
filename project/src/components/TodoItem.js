import React from "react";
import "./TodoItem.css";
import { Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/TodoSlice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };

  return (
    <div className="todoItem">
      <Checkbox checked={done} onChange={handleCheck}></Checkbox>
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
