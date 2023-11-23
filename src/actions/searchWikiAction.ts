import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiSearchWiki } from "../apis/apiSearchAction";
import handleError from "../utils/handleErros";
import PagesWikiDTO from "../interface/PagesWikiDTO";

export const getSearchWikiAction = createAsyncThunk<PagesWikiDTO[], string>(
    "searchWiki/getSearchWikiAction",
    async (search: string, { rejectWithValue }) => {
        try {
            const apiResponse = await apiSearchWiki(search);
            return apiResponse.query.pages;
        } catch (error: any) {
            console.error("Error: ", error);
            return rejectWithValue(handleError(error));
        }
    }
);