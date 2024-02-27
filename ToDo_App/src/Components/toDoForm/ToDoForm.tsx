import React, { useState } from 'react';
import style from './toDoForm.module.css';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/toDoSlice';

const ToDoForm = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    dispatch(addTodo({
      id: new Date().getTime(),
      task: value,
      completed: false
    }));
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
