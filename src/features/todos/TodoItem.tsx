// src/features/todos/TodoItem.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from './todoSlice';
import styles from './css/TodoItem.module.css';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleEdit = () => {
    if (isEditing && newText.trim().length > 0) {
      dispatch(editTodo({
        id: todo.id,
        text: newText
      }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={styles.todoItem}>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={handleToggle} 
        className={styles.todoCheckbox}
      />
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)} 
          className={styles.todoEditInput}
        />
      ) : (
        <span 
          onClick={handleToggle}
          className={`${styles.todoText} ${todo.completed ? styles.completed : ''}`}>
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit} className={styles.editButton}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={handleDelete} className={styles.deleteButton}>Delete</button>
    </div>
  );
};

export default TodoItem;
