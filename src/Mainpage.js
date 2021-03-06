import { useState } from "react";
import "./App.css";
import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";

import { useSelector } from "react-redux";

function Mainpage() {
  const [edit, setedit]= useState(false)
  const [index, setindex] = useState(0);

  const {
    Tasks: { tasks: data },
  } = useSelector((state) => state);
  function SaveIndex(params) {
    
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

export default Mainpage;
