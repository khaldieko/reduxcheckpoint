import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import CreateTask from "../Redux/Actions/CreateTaskAction";

function AddTask(props) {
  const [task, settask] = useState("");
  function handleChange(e) {
    settask(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(CreateTask({task}));
    settask("")
  }
  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={handleSubmit}className="todo-form">
        <>
          <label>
            <h1>What's the Plan for Today?</h1>

            <input
              value={task}
              onChange={handleChange}
              type="text"
              name="text"
              className="todo-input"
            
            />
          </label>
          <button className="todo-button">Add task</button>
        </>
      </form>
    </div>
  );
}

export default AddTask;
