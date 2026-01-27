import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "samiur shahin",
  email: "shahinsamiur@gmail.com",
  role: "buyer",
};

export const adminSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // navigateAdminPage: (state, action) => {
    //   state.page = action.payload;
    // },
  },
});

// export const { navigateAdminPage } = adminSlice.actions; // correct actions export

export default adminSlice.reducer;
