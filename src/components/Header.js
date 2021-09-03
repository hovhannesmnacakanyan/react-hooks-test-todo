import React from 'react';

const Header = ({ todos }) => {
  const doneTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className='mb-5'>
      <h1>Todo-list</h1>
      <div className='row'>
        <div className='col'>
          <h2 className='text-center'>Todo: {todos.length - doneTodosCount}</h2>
        </div>
        <div className='col'>
          <h2 className='text-center'>Done: {doneTodosCount}</h2>
        </div>
        <div className='col'>
          <h2 className='text-center'>All: {todos.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
