import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoItems({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const handleEdit = () => {
    if (isTodoEditable) {
      updateTodo(todo.id, { ...todo, todo: todoMsg });
    }
    setIsTodoEditable((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      <input
        type="text"
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          border: isTodoEditable ? '1px solid #ccc' : 'none',
          background: isTodoEditable ? 'white' : 'transparent',
        }}
      />

      <button onClick={handleEdit}>
        {isTodoEditable ? 'Save' : 'Edit'}
      </button>

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
}

export default TodoItems;
