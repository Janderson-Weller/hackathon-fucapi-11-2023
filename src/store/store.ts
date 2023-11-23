import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slice/searchSlice.ts';

const store = configureStore({
    reducer: {
        searchSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;