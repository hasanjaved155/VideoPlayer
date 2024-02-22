import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import dashboardReducer from './dashboardSlice'

export const store = configureStore({
    reducer: {
        userSlice: userReducer,
        dashboardSlice: dashboardReducer
    },
})