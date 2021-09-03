import React, { useContext, useState } from 'react';
import { Context } from '../context';

const AddTodo = () => {
  const { dispatch } = useContext(Context);
  const [value, setValue] = useState('');

  const inputOnChange = event => {
    setValue(event.target.value);
  };

  const submitHandle = event => {
    event.preventDefault();
    if (!value.trim()) {
      setValue('');
      return;
    }

    dispatch({
      type: 'add',
      payload: value,
    });

    setValue('');
  };

  return (
    <form onSubmit={submitHandle} className='form-row mb-5'>
      <input
        className='form-control col pl-3'
        onChange={inputOnChange}
        type='text'
        value={value}
        placeholder='Add your todo...'
      />
      <button type='submit' className='btn btn-primary ml-2 col-1'>
        Add
      </button>
    </form>
  );
};

export default AddTodo;
