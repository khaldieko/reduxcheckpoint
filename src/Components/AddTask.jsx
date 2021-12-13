import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import CreateTask from "../Redux/Actions/CreateTaskAction"

function AddTask(props) {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(CreateTask())
  },[])
  return (
    <div>
      <form className="todo-form">
        <>
          <label>
            <h1>What's the Plan for Today?</h1>
            <input type="text" name="text" className="todo-input" />
          </label>
          <button className="todo-button">Add task</button>
        </>
      </form>
    </div>
  );
}

export default AddTask;
