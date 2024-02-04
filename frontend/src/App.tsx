import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import * as api from './api';

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ _id: string; todo_name: string }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getTodos();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const addTodo = (todoName: string) => {
    api.createTodo(todoName)
      .then((newTodo) => setTodos([...todos, newTodo]))
      .catch((error) => console.error('Error adding todo:', error));
  };

  const deleteTodo = (id: string) => {
    api.deleteTodo(id)
      .then(() => setTodos(todos.filter((todo) => todo._id !== id)))
      .catch((error) => console.error('Error deleting todo:', error));
  };


  return (
    <div className="container mt-5">
      <h1 className="mb-4">Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
