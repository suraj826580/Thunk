import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import { useDispatch, useSelector } from "react-redux";
import { getTodo } from "../Redux/Todo/action";

export default function Todo() {
  const todoData = useSelector((store) => {
    return store.reducer;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodo);
  }, []);

  if (todoData.isLoading) {
    return <h1>Loading......</h1>;
  }
  return (
    <div>
      <TodoInput />
      {todoData.todos.length > 0 &&
        todoData.todos.map((item) => {
          return (
            <h3 key={Math.random()}>
              {item.title} - {item.status ? "Complete" : "Pending"}
            </h3>
          );
        })}
    </div>
  );
}
