import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';
import Button from '../Button/Button';
import css from './TaskForm.module.css';

const TaskForm: React.FC = () => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addTask(title));
        setTitle('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                className={css.field}
                type="text"
                value={title}
                onChange={handleChange}
                placeholder="Enter task title..."
                maxLength={50}
            />
            <Button type="submit" selected={false}>
                Add task
            </Button>
        </form>
    );
};

export default TaskForm;
