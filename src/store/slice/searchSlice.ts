import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getSearchWikiAction, getSearchYouTubeAction } from "../../actions/searchAction";
import PagesWikiDTO from "../../interface/PagesWikiDTO";
import ItemsYouTubeDTO from "../../interface/ItemsYouTubeDTO";

export interface SearchWikiProps {
    resultSearchWiki: PagesWikiDTO[];
    resultSearchYouTube: ItemsYouTubeDTO[];
    loading: boolean;
    error: string | undefined;
}

const initialState: SearchWikiProps = Object.freeze({
    resultSearchWiki: [],
    resultSearchYouTube: [],
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
            state.resultSearchWiki = action.payload;
            state.loading = false;
        })
        builder.addCase(getSearchWikiAction.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getSearchWikiAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        builder.addCase(getSearchYouTubeAction.fulfilled, (state, action) => {
            state.resultSearchYouTube = action.payload;
            state.loading = false;
        })
        builder.addCase(getSearchYouTubeAction.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getSearchYouTubeAction.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
})

export const {
    setSearchWikiProps,
} = searchSlice.actions;

export default searchSlice.reducer