import React, { useState } from 'react';
import style from './toDoForm.module.css';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { setInputValue } from '../../store/toDoSlice.js';
import { useDispatch } from 'react-redux';

const ToDoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setInputValue(value));
    setValue('');
  };

  return (
    <form className={style.ToDoForm} onSubmit={handleSubmit}>
      <MdRadioButtonUnchecked type="submit" className={style.ToDoForm_icon} />
      <input
        type="text"
        placeholder="Create a new todo"
        className={style.toDoForm_input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default ToDoForm;