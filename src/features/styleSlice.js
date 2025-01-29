import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    darkMode: true
}

const StyleSlice = createSlice({
    name: 'style',
    initialState,
    reducers: {
        setDarkState: (state, action) => {
            state.darkMode = action.payload;
        }
    }
});

export const {
    setDarkState,
} = StyleSlice.actions;
export default StyleSlice.reducer;