import { useState } from 'react';

const TodoForm = ({ onHandleAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onHandleAddTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <label>Add new todo:</label>
      <input type='text' value={newTodo} onChange={handleChange} />
    </form>
  );
};

export default TodoForm;
