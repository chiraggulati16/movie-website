import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    initialState: {
        movies: null
    },
    name: "Home",
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload.movies;
        }
    }
});

export const { setMovies } = homeSlice.actions;
export default homeSlice.reducer;