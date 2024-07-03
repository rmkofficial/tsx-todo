// src/features/todos/TodoList.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import TodoItem from './TodoItem';
import styles from './css/TodoList.module.css';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div className={styles.todoList}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
