// Import necessary dependencies and icons
import { useState } from "react";
import { BsTrashFill, BsCheckSquare } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { formToggled, todoDeleted, toggleInputForm } from "../store/features/todo/todoSlice";

// Functional component for displaying a single todo card
const SingleTodoCard = (props) => {
  // State to manage the completion state of the todo
  const [toggleComplete, setToggleComplete] = useState(false);

  // Redux dispatch function to dispatch actions
  const dispatch = useDispatch();

  // JSX for the single todo card
  return (
    <div className="flex justify-between bg-red-100 py-2 rounded shadow">
      <div className="px-4">
        {/* Todo name with conditional styling for completion status */}
        <h1
          className={
            toggleComplete ? "font-semibold line-through" : "font-semibold"
          }
        >
          {props.name}
        </h1>
      </div>
      <div className="px-4 flex space-x-4">
        {/* Icon for marking the todo as complete */}
        <BsCheckSquare
          onClick={() => setToggleComplete(!toggleComplete)}
          className="cursor-pointer text-green-700"
          size={20}
        />
        
        {/* Icon for editing the todo */}
        <FaEdit
          className="cursor-pointer text-yellow-700"
          size={20}
          onClick={() =>
            dispatch(toggleInputForm({ id: props.id, name: props.name }))
          }
        />
        
        {/* Icon for deleting the todo */}
        <BsTrashFill
          className="cursor-pointer text-red-700"
          size={20}
          onClick={() => dispatch(todoDeleted(props.id))}
        />
      </div>
    </div>
  );
};


export default SingleTodoCard;
