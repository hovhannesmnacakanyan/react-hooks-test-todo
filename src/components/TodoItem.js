import React, { useState, useContext } from 'react';
import { Context } from '../context';

const TodoItem = ({ title, id, completed }) => {
  const { dispatch } = useContext(Context);
  const [editedTitle, setEditedTitle] = useState(title);
  const [isEdit, setIsEdit] = useState(false);

  const inputOnChange = event => {
    setEditedTitle(event.target.value);
  };

  const editItem = () => {
    setIsEdit(prev => !prev);
  };

  return (
    <li className='list-group-item'>
      <div className='row align-items-center'>
        <div className='col-10'>
          <input
            type='checkbox'
            checked={completed}
            onChange={() =>
              dispatch({
                type: 'toggle',
                payload: id,
              })
            }
          />
          {isEdit ? (
            <input
              type='text'
              value={editedTitle}
              onChange={inputOnChange}
              autoFocus={true}
              onBlur={() => setIsEdit(false)}
              className='form-control d-inline-block w-75 ml-2'
            />
          ) : (
            <span className={`ml-3 ${completed ? 'font-weight-bold' : ''}`}>
              {title}
            </span>
          )}
        </div>
        <div className='col-2'>
          <button onClick={editItem} className='btn btn-outline-primary'>
            Edit
          </button>
          <button
            onClick={() =>
              dispatch({
                type: 'remove',
                payload: id,
              })
            }
            className='btn btn-outline-danger ml-2'
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
