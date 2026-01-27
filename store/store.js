// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import adminDashboard from "./slices/adminDashboard"; // we’ll create this next

export const store = configureStore({
  reducer: {
    admin: adminDashboard,
  },
});

export default store;
