import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleCompleted } from '../../redux/tasksSlice';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { TaskType } from '../../interfaces';

// interface TaskType {
//     id: string;
//     title: string;
//     description: string | null;
//     completed: boolean;
// }

const Task = ({ task }: { task: TaskType }) => {
    const dispatch = useDispatch();

    const handleDelete = () => dispatch(deleteTask(task.id));

    const handleToggle = () => dispatch(toggleCompleted(task.id));

    return (
        <div className={css.wrapper}>
            <input
                type="checkbox"
                className={css.checkbox}
                checked={task.completed}
                onChange={handleToggle}
            />
            <div className={css.text}>
                <p className={css.title}>{task.title}</p>
                <p className={css.description}>{task.description}</p>
            </div>
            <button className={css.btn} onClick={handleDelete}>
                <MdClose size={24} />
            </button>
        </div>
    );
};

export default Task;
