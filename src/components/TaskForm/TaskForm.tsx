import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasksSlice';
import Button from '../Button/Button';
import css from './TaskForm.module.css';

const TaskForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addTask(title, description));
        setTitle('');
        setDescription('');
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === 'title') {
            setTitle(event.target.value);
        } else {
            setDescription(event.target.value);
        }
    };

    return (
        <>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    required
                    className={css.field}
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Title..."
                    maxLength={20}
                />
                <input
                    required
                    className={css.field}
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    placeholder="Description..."
                    maxLength={50}
                />
                <Button type="submit" selected={false} className={css.btn}>
                    Add task
                </Button>
            </form>
        </>
    );
};

export default TaskForm;
