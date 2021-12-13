//import getTask from "../Actions/GetTaskActions";
const initTask=[]
const GetTaskReducer=(state=initTask, action)=>{
    switch(action.type){
        case "GET_TASK_SUCCESS":
            return [...initTask, action.payload]
            default:
                return initTask
    }
}

export default GetTaskReducer