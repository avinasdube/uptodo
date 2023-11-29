import { createSlice } from '@reduxjs/toolkit';

// SETTING INITIALSTATE FOR 'filterSlice'
const initialState = {
    activeFilter: 'All Tasks',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // SETTING ACTIVE FILTER
        setActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },
    }
})

export const { setActiveFilter } = filterSlice.actions;
export default filterSlice.reducer;