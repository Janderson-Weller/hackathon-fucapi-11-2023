import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slice/searchSlice.ts';
import toDoSlice from './slice/todo.ts';

const store = configureStore({
    reducer: {
        searchSlice,
        toDoSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;