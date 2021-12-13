import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";


function App() {
  const [tasks, settasks]=useState([])
  return (
    <div className='todo-app'>
      <AddTask />
      <ListTask tasks={tasks} settasks={settasks}/>
    </div>
  );
}

export default App;
