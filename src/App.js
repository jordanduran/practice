import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((result) => result.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  const handleAddTodo = (newTodo) => {
    const updatedTodos = [
      ...todos,
      {
        id: Date.now(),
        title: newTodo,
        completed: false,
      },
    ];
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoForm onHandleAddTodo={handleAddTodo} />
      <div className='container'>
        <Todos todos={todos} onHandleDeleteTodos={handleDeleteTodo} />
      </div>
    </>
  );
};

export default App;
