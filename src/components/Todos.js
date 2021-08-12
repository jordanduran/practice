import React from 'react';

const Todos = ({ todos, onHandleDeleteTodos }) => {
  const listOfTodos = todos.length ? (
    todos.map((todo) => {
      return (
        <div key={todo.id} className='todo collection-item'>
          {todo.title}
          <i
            className='delete-icon material-icons right'
            onClick={() => onHandleDeleteTodos(todo.id)}
          >
            clear
          </i>
        </div>
      );
    })
  ) : (
    <p style={{ textAlign: 'center' }}>No todos left</p>
  );

  return <div className='collection'>{listOfTodos}</div>;
};

export default Todos;
