import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./features/tableSlice"; // Adjust the path and name accordingly

const store = configureStore({
  reducer: {
    table: tableReducer, // Add your reducers here
  },
});

export default store;
