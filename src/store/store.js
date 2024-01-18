import { configureStore } from "@reduxjs/toolkit";

// Import the reducer for the 'todos' feature from the todoSlice file
import todoReducer from "./features/todo/todoSlice";

// Configure the Redux store using the configureStore function
const store = configureStore({
  // Define the root reducer, where 'todos' is a slice of the state managed by todoReducer
  reducer: {
    todos: todoReducer,
  },
});


export default store;
