import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getTodos = async () => {
  try {
    const response = await axios.get(`${API_URL}/todos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

export const createTodo = async (todoName: string) => {
  try {
    const response = await axios.post(`${API_URL}/todos/new`, { todo_name: todoName });
    return response.data;
  } catch (error) {
    console.error('Error creating todo:', error);
    throw error;
  }
};

export const updateTodo = async (id: string, todoName: string) => {
  try {
    const response = await axios.put(`${API_URL}/todos/update/${id}`, { todo_name: todoName });
    return response.data;
  } catch (error) {
    console.error('Error updating todo:', error);
    throw error;
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/todos/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};
