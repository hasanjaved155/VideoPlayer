import { createSlice } from '@reduxjs/toolkit'



export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        allData: {},
        filterData: {}
    },
    reducers: {
        getAllData: (state, action) => {
            state.allData = action.payload;
        },
        getFilterData: (state, action) => {
            state.filterData = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { getAllData, getFilterData } = dashboardSlice.actions

export default dashboardSlice.reducer