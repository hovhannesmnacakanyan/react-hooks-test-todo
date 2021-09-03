import React, { useEffect, useReducer } from 'react';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoList from './components/TodoLIst';
import { Context } from './context';
import reducer from './reducer';

const App = () => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('todos')) || [],
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider value={{ dispatch }}>
      <div className='container pt-3'>
        <Header todos={state} />
        <AddTodo />
        {state.length ? <TodoList todos={state} /> : <h2>No data...</h2>}
      </div>
    </Context.Provider>
  );
};

export default App;
