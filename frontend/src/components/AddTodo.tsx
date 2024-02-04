import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (todoName: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="mb-3">
      <div className="input-group">
        <input type="text" className="form-control" value={newTodo} onChange={handleInputChange} />
        <button className="btn btn-primary" type="button" onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default AddTodo;
