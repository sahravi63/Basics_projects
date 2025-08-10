import './App.css';
import React, { useState } from 'react';
import { TodoProvider } from './contexts';
import TodoItems from './contexts/todoItems';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), completed: false, ...todo }
    ]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? updatedTodo : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="App">
        <h1>Todo List</h1>

        {todos.map((t) => (
          <TodoItems key={t.id} todo={t} />
        ))}

        <button onClick={() => addTodo({ todo: 'Sample Task' })}>
          Add Sample Todo
        </button>
      </div>
    </TodoProvider>
  );
}

export default App;
