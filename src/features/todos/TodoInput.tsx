// src/features/todos/TodoInput.tsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";
import styles from "./css/TodoInput.module.css";

const TodoInput: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim().length > 0) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={styles.inputField}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddTodo} className={styles.addButton}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
