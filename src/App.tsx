// src/App.tsx
import React from 'react';
import TodoInput from './features/todos/TodoInput';
import TodoList from './features/todos/TodoList';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Todo App</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
