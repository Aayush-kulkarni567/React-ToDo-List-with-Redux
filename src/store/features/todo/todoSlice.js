// todoSlice.js

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: nanoid(), name: "Wake up", completed: false },
    { id: nanoid(), name: "Have breakfast", completed: false },
    { id: nanoid(), name: "Do Code", completed: false },
  ],
  toggleForm: true,
  todoUpdate: {},
  filterStatus: "all",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    toggleInputForm: (state, action) => {
      state.toggleForm = !state.toggleForm;
      state.todoUpdate = { ...state.todoUpdate, ...action.payload };
    },
    todoUpdated: (state, action) => {
      const todoToUpdate = state.todos.find((todo) => todo.id === action.payload.id);
      if (todoToUpdate) {
        todoToUpdate.name = action.payload.name;
        todoToUpdate.completed = action.payload.completed;
      }
      state.toggleForm = !state.toggleForm;
    },
    todoDeleted: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    todosCleared: (state) => {
      state.todos = [];
    },
    todoAdded: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    setFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
    todoCompleted: (state, action) => {
      const todoToUpdate = state.todos.find((todo) => todo.id === action.payload);
      if (todoToUpdate) {
        todoToUpdate.completed = !todoToUpdate.completed;
      }
    },
  },
});

export const {
  toggleInputForm,
  todoDeleted,
  todosCleared,
  todoAdded,
  todoUpdated,
  setFilterStatus,
  todoCompleted, // Add this line
} = todoSlice.actions;

export default todoSlice.reducer;
