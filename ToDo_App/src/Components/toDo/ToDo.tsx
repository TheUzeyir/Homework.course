import React from 'react';
import style from './toDo.module.css';
import { FaRegCheckCircle } from "react-icons/fa";
import { MdRadioButtonUnchecked } from 'react-icons/md';

const ToDo = ({ task, toggleComplete }) => {
  return (
    <div className={style.ToDo}>
      <div onClick={() => toggleComplete(task.id)} className={style.toDOTask}>
        {task.completed ? (
          <FaRegCheckCircle className={style.ToDo_task_icon_completed}/>
        ) : (
          <MdRadioButtonUnchecked className={style.ToDo_task_icon}/>
        )}
        <span className={style.taskText + ' ' + (task.completed ? style.completed : '')}>{task.task}</span>
      </div>
    </div>
  );
};

export default ToDo;
