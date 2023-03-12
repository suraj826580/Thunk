import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleAddTodo } from "../Redux/Todo/action";

export default function TodoInput() {
  const dispatch = useDispatch();
  const [InputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddTodo(InputValue));
    setInputValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          placeholder="Type your todo here"
          value={InputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}
