import React, { useState } from 'react';
import style from './toDoForm.module.css';
import { MdRadioButtonUnchecked } from 'react-icons/md';

const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
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