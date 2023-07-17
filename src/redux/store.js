import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './reducer/habitSlice'

const store=configureStore({
  reducer: {
    habits: habitReducer,
  },
});
export default store;