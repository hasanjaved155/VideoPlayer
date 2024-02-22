import { createSlice } from '@reduxjs/toolkit'



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        isAdmin: false
    },
    reducers: {
        getUserConfiguration: (state, action) => {
            state.user = action.payload;
        },
        getAdminConfiguration: (state) => {
            state.isAdmin = !state.isAdmin
        }
    },
})

// Action creators are generated for each case reducer function
export const { getUserConfiguration, getAdminConfiguration } = userSlice.actions

export default userSlice.reducer