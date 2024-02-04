import React from 'react';

interface TodoItemProps {
  todo: { _id: string; todo_name: string };
  deleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {todo.todo_name}
      <button className="btn btn-danger" onClick={() => deleteTodo(todo._id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
