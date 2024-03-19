import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import dashboardReducer from "./dashboardSlice";
import mycourseReducer from "./mycourseSlice";

export const store = configureStore({
  reducer: {
    userSlice: userReducer,
    dashboardSlice: dashboardReducer,
    mycourseSlice: mycourseReducer,
  },
});
