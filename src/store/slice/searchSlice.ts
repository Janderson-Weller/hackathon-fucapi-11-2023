import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getSearchWikiAction } from "../../actions/searchAction";
import PagesWikiDTO from "../../interface/PagesWikiDTO";

export interface SearchWikiProps {
    resultSearch: PagesWikiDTO[];
    loading: boolean;
    error: string | undefined;
}

const initialState: SearchWikiProps = Object.freeze({
    resultSearch: [],
    loading: false,
    error: undefined
});

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        setSearchWikiProps: <K extends keyof SearchWikiProps,>(state: SearchWikiProps, action: PayloadAction<{ prop: K, value: any }>) => {
            const { prop, value } = action.payload;
            state[prop] = value;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getSearchWikiAction.fulfilled, (state, action) => {
            console.log(action.payload)
            state.resultSearch = action.payload;
            state.loading = false;
        })
        builder.addCase(getSearchWikiAction.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getSearchWikiAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})

export const {
    setSearchWikiProps,
} = searchSlice.actions;

export default searchSlice.reducer