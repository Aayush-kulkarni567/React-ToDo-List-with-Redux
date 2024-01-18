
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoUpdated } from "../store/features/todo/todoSlice";

// Functional component for updating a todo
const UpdateTodoForm = () => {
  // Redux dispatch function to dispatch actions
  const dispatch = useDispatch();
  
  // Retrieve the todo to be updated from the Redux store
  const todoToUpdate = useSelector((state) => state.todos.todoUpdate);
  
  // State to manage the input value for updating the todo
  const [update, setUpdate] = useState(todoToUpdate.name);

  // Function to handle form submission for updating the todo
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if the updated todo is empty or contains only spaces
    if (/^\s*$/.test(update)) {
      alert("Enter a todo");
      setUpdate("");
      return;
    } else {
      // Dispatch the todoUpdated action with the updated todo object
      dispatch(
        todoUpdated({
          id: todoToUpdate.id,   // Use the existing ID for the todo
          name: update,          // Set the updated name for the todo
        })
      );
      setUpdate("");  // Clear the input field after updating the todo
    }
  };

  // JSX for the update todo form
  return (
    <>
      {/* Form for updating the todo */}
      <form onSubmit={handleSubmit} className="flex space-x-3">
        {/* Input field for entering the updated todo */}
        <input
          type="text"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-zinc-200"
          placeholder="Update"
        />
        
        {/* Button to submit the updated todo */}
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-7 rounded focus:outline-none focus:shadow-outline"
        >
          Update
        </button>
      </form>
    </>
  );
};


export default UpdateTodoForm;
