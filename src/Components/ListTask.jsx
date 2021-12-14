import { React } from "react";
//BsFillTrashFill
//AiFillEdit
// AiOutlineCheckCircle
// AiFillCheckCircle
import { AiFillEdit, AiOutlineCheckCircle ,AiFillCheckCircle } from "react-icons/ai";
function ListTask({ SaveIndex, tasks }) {
  return (
    <div className="todo-container">
      {tasks.map((task, i) => (
        <div className="todo-row" key={`${task} ${i}`}>
          {task}

          <div className="icons">
            <AiFillEdit onClick={()=>{SaveIndex(i)}}className="icons-edit" />
            {task.done ? <AiFillCheckCircle style={{fill:"black"}}/> : <AiOutlineCheckCircle/>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListTask;
