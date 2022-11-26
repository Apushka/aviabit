import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: null
    },
    reducers: {
        searchReceived: (state, action) => {
            state.query = action.payload;
        }
    }
});

const { reducer: searchReducer, actions } = searchSlice;
export const { searchReceived } = actions;

export const getSearchQuery = () => (state) => state.search.query;

export default searchReducer;
