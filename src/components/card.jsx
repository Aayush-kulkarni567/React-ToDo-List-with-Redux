// Card.jsx

import React from "react";
import AddTodoForm from "./AddTodoForm";
import UpdateTodoForm from "./UpdateTodoForm";
import SingleTodoCard from "./SingleTodoCard";

import { useSelector, useDispatch } from "react-redux";
import { todosCleared, setFilterStatus } from "../store/features/todo/todoSlice";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const Card = () => {
  const toggleForm = useSelector((state) => state.todo.toggleForm);
  const myTodos = useSelector((state) => state.todo.todos);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const handleFilterStatusChange = (status) => {
    dispatch(setFilterStatus(status));
  };

  return (
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto mt-8 p-4 bg-amber-100 shadow-2xl rounded-lg">
      <div className="flex flex-col space-y-4 items-center">
        <h1 className="text-3xl font-semibold underline">My Todo List</h1>
        <div className="w-full">
          {toggleForm ? <AddTodoForm /> : <UpdateTodoForm />}
        </div>
        <div className="w-full">
          {myTodos.length !== 0 ? (
            <div>
              <div className="flex justify-center space-x-4 mb-4">
                <button
                  className={`${
                    filterStatus === "all" ? "bg-blue-500" : "bg-blue-300"
                  } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handleFilterStatusChange("all")}
                >
                  All
                </button>
                <button
                  className={`${
                    filterStatus === "completed" ? "bg-green-500" : "bg-green-300"
                  } hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handleFilterStatusChange("completed")}
                >
                  Completed
                </button>
                <button
                  className={`${
                    filterStatus === "active" ? "bg-red-500" : "bg-red-300"
                  } hover:bg-red-700 text-white font-bold py-2 px-4 rounded`}
                  onClick={() => handleFilterStatusChange("active")}
                >
                  Active
                </button>
              </div>
              <ul className="w-full max-h-72 overflow-y-scroll">
                {myTodos
                  .filter((todo) => {
                    if (filterStatus === "all") return true;
                    if (filterStatus === "completed") return todo.completed;
                    if (filterStatus === "active") return !todo.completed;
                    return true;
                  })
                  .map((todo) => (
                    <li className="mb-3" key={todo.id}>
                      <SingleTodoCard name={todo.name} id={todo.id} completed={todo.completed} />
                    </li>
                  ))}
              </ul>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center space-y-10">
              <h1 className="text-2xl">Enter your first todo item</h1>
              <BsFillCheckCircleFill size={50} className="text-green-500" />
            </div>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline mt-4"
        onClick={() => {
          dispatch(todosCleared());
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Card;
