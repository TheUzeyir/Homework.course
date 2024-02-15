  import React, { useState } from 'react';
  import ToDoForm from '../toDoForm/ToDoForm';
  import { v4 as uuidv4 } from 'uuid';
  import ToDo from '../toDo/ToDo';
  import style from './toDoWrapper.module.css';
  import lightModeImg from '../../assets/img/lightMode.jpg';
  import { IoMoon } from 'react-icons/io5';

  const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          task: todo,
          completed: false,
          isEditing: false,
        },
      ]);
    };

    const toggleComplete = (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };

    const deleteComponent=()=>{
      
    }

    return (
      <div className={style.toDoWrapper}>
        <div className={style.toDoWrapper_imgbox}>
          <img src={lightModeImg} alt="img" />
        </div>
        <div className={style.toDoWrapper_header}>
          <h2>TODO</h2>
          <IoMoon />
        </div>
        <div className={style.todoform_box}>
          <ToDoForm addTodo={addTodo}/>
          <ul className={style.ToDo}>
            {todos.map((todo) => (
              <ToDo task={todo} key={todo.id} toggleComplete={toggleComplete}/>
            ))}
          </ul>
          <div className={style.todoform_box_footer}>
            <span>{todos.filter((todo) => !todo.completed).length} items left</span>
            <div className={style.todoform_box_footer_status}>
              <div className={style.todoform_box_footer_status_filter_box}>
                <span className={style.todoform_box_footer_status_filter}>All</span>
                <span className={style.todoform_box_footer_status_filter}>Active</span>
                <span className={style.todoform_box_footer_status_filter}>Completed</span>
              </div>
            </div>
            <p onClick={deleteComponent}>Clear Completed</p>
          </div>
        </div>
      </div>
    );
  };

  export default ToDoWrapper;