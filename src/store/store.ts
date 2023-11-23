import { configureStore } from '@reduxjs/toolkit';
import searchWikiSlice from './slice/searchWikipedia';

const store = configureStore({
    reducer: {
        searchWikiSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;