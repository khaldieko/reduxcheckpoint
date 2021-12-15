import { React, useState } from "react";
import markdone from "../Redux/Actions/MarkDoneActions";
import { useDispatch } from "react-redux";
//BsFillTrashFill
//AiFillEdit
// AiOutlineCheckCircle
// AiFillCheckCircle
import {
  AiFillEdit,
  AiOutlineCheckCircle,
  AiFillCheckCircle,
} from "react-icons/ai";
function ListTask({ SaveIndex, tasks }) {
  const [done, setdone] = useState(false);
  const [index, setindex] = useState(0);

  const dispatch = useDispatch();
  if (done) {
    const data={index,done:true}
    dispatch(markdone({task:data }));
    setdone(false);
  }

  return (
    <div className="todo-container">
      {tasks.map((task, i) => (
        <div className="todo-row" key={`${task} ${i}`}>
          {task.task}

          <div className="icons">
            <AiFillEdit
              onClick={() => {
                SaveIndex(i);
              }}
              className="icons-edit"
            />
            {task.done ? (
              <AiFillCheckCircle style={{ fill: "black" }} />
            ) : (
              <AiOutlineCheckCircle
                onClick={() => {
                  setdone(true);
                  setindex(i);
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ListTask;
