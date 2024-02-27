import React, { useState, useEffect } from 'react';
import ToDoForm from '../toDoForm/ToDoForm';
import ToDo from '../toDo/ToDo';
import style from './toDoWrapper.module.css';
import lightModeImg from '../../assets/img/lightMode.jpg';
import darkModeImg from '../../assets/img/darkMode.jpg';
import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../../store/toDoSlice';

const ToDoWrapper = () => {
  const [darkMode, setDarkMode] = useState(false);
  const todos = useSelector(state => state.toDo.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const addTodo = (todo) => {
    dispatch(setInputValue([...todos, todo]));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    dispatch(setInputValue(updatedTodos));
  };

  const deleteCompletedTodos = () => {
    const filteredTodos = todos.filter(todo => !todo.completed);
    dispatch(setInputValue(filteredTodos));
  };

  const setDarkModes = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightModes = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const toggleMode = () => {
    setDarkMode(prev => !prev);
    if (!darkMode) {
      setDarkModes();
    } else {
      setLightModes();
    }
  };

  return (
    <div className={`${style.toDoWrapper} ${darkMode ? style.darkMode : ""}`}>
      <div className={style.toDoWrapper_imgbox}>
        <img src={darkMode ? darkModeImg : lightModeImg} alt="img" />
      </div>
      <div className={style.toDoWrapper_header}>
        <h2>TODO</h2>
        {darkMode ? (
          <IoSunnyOutline className={style.moonIcon} onClick={toggleMode} />
        ) : (
          <IoMoon className={style.moonIcon} onClick={toggleMode} />
        )}
      </div>
      <div className={style.todoform_box}>
        <ToDoForm addTodo={addTodo} />
        <ul className={style.ToDo}>
          {todos.map(todo => (
            <ToDo task={todo} key={todo.id} toggleComplete={toggleComplete} />
          ))} 
        </ul>
        <div className={style.todoform_box_footer}>
          <span>{todos.filter(todo => !todo.completed).length} items left</span>
          <div className={style.todoform_box_footer_status}>
            <div className={style.todoform_box_footer_status_filter_box}>
              <span className={style.todoform_box_footer_status_filter}>All</span>
              <span className={style.todoform_box_footer_status_filter}>Active</span>
              <span className={style.todoform_box_footer_status_filter}>Completed</span>
            </div>
          </div>
          <p onClick={deleteCompletedTodos}>Clear Completed</p>
        </div>
      </div>
    </div>
  );
};

export default ToDoWrapper;
