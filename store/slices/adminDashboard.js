// store/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "User List", // default page
};

export const adminSlice = createSlice({
  name: "Admin",
  initialState,
  reducers: {
    navigateAdminPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { navigateAdminPage } = adminSlice.actions; // correct actions export

export default adminSlice.reducer;
