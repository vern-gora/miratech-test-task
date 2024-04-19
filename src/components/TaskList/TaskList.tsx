import React from 'react';
import { useSelector } from 'react-redux';
import Task from '../Task/Task';
import { getTasks, getStatusFilter } from '../../redux/selectors';
import css from './TaskList.module.css';
import { statusFilters } from '../../redux/constants';

const getVisibleTasks = (tasks: any[], statusFilter: any) => {
    switch (statusFilter) {
        case statusFilters.current:
            return tasks.filter(task => !task.completed);
        case statusFilters.completed:
            return tasks.filter(task => task.completed);
        default:
            return tasks;
    }
};

const TaskList: React.FC = () => {
    const tasks = useSelector(getTasks);
    const statusFilter = useSelector(getStatusFilter);
    const visibleTasks = getVisibleTasks(tasks, statusFilter);

    return (
        <ul className={css.list}>
            {visibleTasks.map(task => (
                <li className={css.listItem} key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
