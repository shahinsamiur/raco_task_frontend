// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import adminDashboard from "./slices/adminDashboard"; // we’ll create this next
import user from "./slices/user";
export const store = configureStore({
  reducer: {
    admin: adminDashboard,
    user: user,
  },
});

export default store;
