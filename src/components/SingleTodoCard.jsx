// SingleTodoCard.jsx

import React from "react";
import { useDispatch } from "react-redux";
import { toggleInputForm, todoDeleted, todoCompleted } from "../store/features/todo/todoSlice";
import { BsTrashFill, BsCheckSquare } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const SingleTodoCard = ({ name, id, completed }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(toggleInputForm({ id, name }));
  };

  const handleDeleteClick = () => {
    dispatch(todoDeleted(id));
  };

  const handleCheckboxClick = () => {
    dispatch(todoCompleted(id));
  };

  return (
    <div className={`flex justify-between ${completed ? "bg-green-100" : "bg-red-100"} py-2 rounded shadow`}>
      <div className="px-4">
        <h1 className={completed ? "font-semibold line-through text-green-700" : "font-semibold"}>
          {name}
        </h1>
      </div>
      <div className="px-4 flex space-x-4">
        <BsCheckSquare
          onClick={handleCheckboxClick}
          className={`cursor-pointer text-${completed ? "green" : "red"}-700`}
          size={20}
        />
        <FaEdit
          className="cursor-pointer text-yellow-700"
          size={20}
          onClick={handleEditClick}
        />
        <BsTrashFill
          className="cursor-pointer text-red-700"
          size={20}
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
};

export default SingleTodoCard;
