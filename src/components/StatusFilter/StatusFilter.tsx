import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice';
import Button from '../Button/Button';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import css from './StatusFilter.module.css';

const StatusFilter: React.FC = () => {
    const filter: string = useSelector(getStatusFilter);

    const dispatch = useDispatch();

    const handleFilterChange = (filter: string) =>
        dispatch(setStatusFilter(filter));

    return (
        <div className={css.wrapper}>
            <Button
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}
            >
                All
            </Button>
            <Button
                selected={filter === statusFilters.current}
                onClick={() => handleFilterChange(statusFilters.current)}
            >
                Current
            </Button>
            <Button
                selected={filter === statusFilters.completed}
                onClick={() => handleFilterChange(statusFilters.completed)}
            >
                Completed
            </Button>
        </div>
    );
};

export default StatusFilter;
