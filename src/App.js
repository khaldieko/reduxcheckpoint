import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";

import { useSelector } from "react-redux";

function App() {
  const [edit, setedit]= useState(false)
  const [index, setindex] = useState(0);

  const {
    createTask: { tasks: data },
  } = useSelector((state) => state);
  function SaveIndex(params) {
    console.log(params)
    if (params.toString().length >=0)setedit(true)
    setindex(params);
  }
  
  return (
    <div className="todo-app">
      <AddTask index={index} edit={edit} setedit={setedit}/>
      <ListTask tasks={data} SaveIndex={SaveIndex} />
    </div>
  );
}

export default App;
