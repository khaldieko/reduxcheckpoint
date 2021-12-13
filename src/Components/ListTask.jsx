import { React, useEffect } from "react";
import GetTask from "../Redux/Actions/GetTaskActions";
import { useDispatch } from "react-redux";
function ListTask({ tasks, settasks }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = dispatch(GetTask());
    settasks(data);
  }, []);
  return (
    <div>
      {tasks.map((task) => (
        <div>{task}</div>
      ))}
    </div>
  );
}

export default ListTask;
