import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { _id: string; todo_name: string }[];
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <ul className="list-group mt-3">
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
