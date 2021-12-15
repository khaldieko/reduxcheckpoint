import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CreateTask from "../Redux/Actions/CreateTaskAction";
import EditTask from "../Redux/Actions/EditTaskActions";
function AddTask({ index, edit, setedit }) {
  const [task, settask] = useState("");
  const dispatch = useDispatch();
  function handleChange(e) {
    settask(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (edit) {
      console.log(edit, task)
      const data = { new:task, index };
      dispatch(EditTask({ task: data }));
      setedit(false);
    } else {
      const data = { task, done: false };
      dispatch(CreateTask({ task: data }));
      settask("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
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
          <button className="todo-button">
            {edit ? "edit task" : "Add task"}
          </button>
        </>
      </form>
    </div>
  );
}

export default AddTask;
