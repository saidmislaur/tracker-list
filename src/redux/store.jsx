import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { tasksReducer } from "./slices/tasks";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  }
})

export default store;
