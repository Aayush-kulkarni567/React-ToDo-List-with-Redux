
import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import UpdateTodoForm from "./UpdateTodoForm";
import SingleTodoCard from "./SingleTodoCard";

import { useSelector, useDispatch } from "react-redux";
import { todosCleared } from "../store/features/todo/todoSlice";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

// Functional component for displaying a todo list card
const Card = () => {
  // Retrieve the toggleForm state and todos from the Redux store
  const toggleForm = useSelector((state) => state.todos.toggleForm);
  const myTodos = useSelector((state) => state.todos.todos);
  
  // Log the todos to the console for debugging purposes
  console.log(myTodos);

  // Redux dispatch function to dispatch actions
  const dispatch = useDispatch();

  // Conditional rendering based on the toggleForm state
  if (toggleForm) {
    // Display the form for adding or updating todos
    return (
      <div className="w-1/2 h-3/4 min-h-max bg-amber-100 shadow-2xl rounded-lg p-2 items-center flex flex-col space-y-10 justify-between">
        <div className="flex flex-col space-y-10 w-full h-3/4 min-h-max items-center">
          <h1 className="text-3xl font-semibold underline">My Todo List</h1>
          <div className="w-3/4">
            {toggleForm ? <AddTodoForm /> : <UpdateTodoForm />}
          </div>
          <div className="w-3/4">
            {myTodos.length !== 0 ? (
              // Display the list of todos if there are any
              <ul className="w-full max-h-72 overflow-y-scroll">
                {myTodos.map((todo) => (
                  <li className="mb-3" key={todo.id}>
                    <SingleTodoCard name={todo.name} id={todo.id} />
                  </li>
                ))}
              </ul>
            ) : (
              // Display a message if there are no todos
              <div className="w-full flex flex-col items-center space-y-10">
                <h1 className="text-2xl">Enter your first todo item</h1>
                <BsFillCheckCircleFill size={50} className="text-green-500" />
              </div>
            )}
          </div>
        </div>
        {/* Button to clear all todos */}
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          onClick={() => {
            dispatch(todosCleared());
          }}
        >
          Clear
        </button>
      </div>
    );
  } else {
    // Display the form for updating todos and an edit icon
    return (
      <div className="w-1/2 h-3/4 min-h-max bg-amber-100 shadow-2xl rounded-lg p-2 items-center flex flex-col space-y-10 justify-between">
        <div className="flex flex-col space-y-10 w-full h-3/4 min-h-max items-center">
          <h1 className="text-3xl font-semibold underline">
            My Todo List for Today
          </h1>
          <div className="w-3/4">
            <UpdateTodoForm />
            <div className="w-full flex flex-col items-center space-y-10 mt-20">
              <h1 className="text-2xl">Edit your todo item</h1>
              <FaEdit size={50} className="text-green-500" />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

// Export the Card component
export default Card;
