// src/App.tsx
import React from "react";
import TodoInput from "./features/todos/TodoInput";
import TodoList from "./features/todos/TodoList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
