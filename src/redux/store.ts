import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./tasksSlice";
import { filtersReducer } from "./filtersSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
