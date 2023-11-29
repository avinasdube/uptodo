import { createSlice } from '@reduxjs/toolkit';

// SETTING INITIALSTATE FOR 'filterSlice'
const initialState = {
    activeFilter: 'All Tasks',
    activePage: 'Tasklist'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        // SETTING ACTIVE FILTER
        setActiveFilter: (state, action) => {
            state.activeFilter = action.payload;
        },

        setActivePage: (state, action) =>{
            state.activePage = action.payload;
        }
    }
})

export const { setActiveFilter, setActivePage } = filterSlice.actions;
export default filterSlice.reducer;