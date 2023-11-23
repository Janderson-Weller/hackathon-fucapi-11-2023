import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiSearchWiki, apiSearchYouTube } from "../apis/apiSearchAction";
import handleError from "../utils/handleErros";
import PagesWikiDTO from "../interface/PagesWikiDTO";
import ItemsYouTubeDTO from "../interface/ItemsYouTubeDTO";

export const getSearchWikiAction = createAsyncThunk<PagesWikiDTO[], string>(
    "searchSlice/getSearchWikiAction",
    async (search: string, { rejectWithValue }) => {
        try {
            const apiResponse = await apiSearchWiki(search);

            if (apiResponse.query)
                return apiResponse.query.pages;
            return [];
        } catch (error: any) {
            console.error("Error: ", error);
            return rejectWithValue(handleError(error));
        }
    }
);

export const getSearchYouTubeAction = createAsyncThunk<ItemsYouTubeDTO[], string>(
    "searchSlice/getSearchYouTubeAction",
    async (search: string, { rejectWithValue }) => {
        try {
            const apiResponse = await apiSearchYouTube(search);

            if (apiResponse.items)
                return apiResponse.items;
            return [];
        } catch (error: any) {
            console.error("Error: ", error);
            return rejectWithValue(handleError(error));
        }
    }
);