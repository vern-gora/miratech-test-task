import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { TaskType } from '../interfaces';

const tasksInitialState: TaskType[] = [
    {
        id: '0',
        title: 'water',
        description: 'drink a glass of water',
        completed: true,
    },
    {
        id: '1',
        title: 'teeth',
        description: 'brush your teeth',
        completed: true,
    },
    {
        id: '2',
        title: 'bed',
        description: 'make a bed',
        completed: false,
    },
    {
        id: '3',
        title: 'exercises',
        description: 'do exercises',
        completed: false,
    },
    {
        id: '4',
        title: 'store',
        description: 'go to the store',
        completed: false,
    },
];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: tasksInitialState,
    reducers: {
        addTask: {
            reducer(state, action: PayloadAction<TaskType>) {
                state.push(action.payload);
            },
            prepare(title: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        description: null,
                        completed: false,
                    } as TaskType,
                };
            },
        },
        deleteTask(state, action: PayloadAction<string>) {
            const index = state.findIndex(task => task.id === action.payload);
            state.splice(index, 1);
        },
        toggleCompleted(state, action: PayloadAction<string>) {
            const task = state.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
