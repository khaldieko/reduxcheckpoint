import { React } from "react";

function ListTask({ tasks }) {
  return (
    <div className="todo-container">
      {tasks.map((task, i) => (
        <div className="todo-row" key={`${task} ${i}`}>
          {task}
        </div>
      ))}
    </div>
  );
}

export default ListTask;
