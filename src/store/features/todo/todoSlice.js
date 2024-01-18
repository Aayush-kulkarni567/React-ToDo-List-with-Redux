import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state for the todo slice
const initialState = {
  todos: [
    { id: nanoid(), name: "Wake up" },
    { id: nanoid(), name: "Have breakfast" },
    { id: nanoid(), name: "Do Code" }
  ],
  toggleForm: true,        // Flag to toggle between add and update forms
  todoUpdate: {},          // Todo object to store information for update form
};

// Create a Redux slice for managing todos
export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    // Toggle the input form for adding or updating todos
    toggleInputForm: (state, action) => {
      state.toggleForm = !state.toggleForm;
      state.todoUpdate = { ...state.todoUpdate, ...action.payload };
    },
    // Update a todo based on the payload received
    todoUpdated: (state, action) => {
      const todoToUpdate = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      todoToUpdate.name = action.payload.name;
      state.toggleForm = !state.toggleForm;
    },
    // Delete a todo based on the payload received
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    // Clear all todos in the state
    todosCleared: (state) => {
      state.todos = [];
    },
    // Add a new todo based on the payload received
    todoAdded: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
  },
});

// Export individual action creators
export const {
  toggleInputForm,
  todoDeleted,
  todosCleared,
  todoAdded,
  todoUpdated,  // Note: there were two todoUpdated entries, merged them into one
  
} = todoSlice.actions;


export default todoSlice.reducer;
