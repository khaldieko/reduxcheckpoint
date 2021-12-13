import { useState, useEffect } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import GetTask from "./Redux/Actions/GetTaskActions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [tasks, settasks] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetTask());
  }, []);
  const {
    createTask: { tasks: data },
  } = useSelector((state) => state);
  console.log(data);
  return (
    <div className="todo-app">
      <AddTask />
      <ListTask tasks={data} />
    </div>
  );
}

export default App;
