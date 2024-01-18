// Import necessary dependencies from React and Redux toolkit
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { todoAdded } from "../store/features/todo/todoSlice";

// Functional component for adding a new todo
const AddTodoForm = () => {
  // State to manage the input value
  const [input, setInput] = useState("");
  
  // Redux dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the input is empty or contains only spaces
    if (/^\s*$/.test(input)) {
      alert("Enter a todo");
      setInput("");
      return;
    } else {
      // Dispatch the todoAdded action with a new todo object
      dispatch(
        todoAdded({
          id: nanoid(),   // Generate a unique ID for the todo
          name: input,    // Set the name of the todo
        })
      );
      setInput("");     // Clear the input field after adding the todo
    }
  };

  // JSX for the todo form
  return (
    <>
      {/* Form with input field and submit button */}
      <form onSubmit={handleSubmit} className="flex space-x-3">
        {/* Input field for entering the todo */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-200"
          placeholder="Add todo"
        />
        
        {/* Submit button to add the todo */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
        >
          Add
        </button>
      </form>
    </>
  );
};

// Export the AddTodoForm component
export default AddTodoForm;
