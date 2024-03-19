import { createSlice } from "@reduxjs/toolkit";

export const mycourseSlice = createSlice({
  name: "mycourse",
  initialState: {
    myData: {},
  },
  reducers: {
    getMyData: (state, action) => {
      state.myData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getMyData } = mycourseSlice.actions;

export default mycourseSlice.reducer;
