const initTask={
    id:"",
    description:"",
    title:""
}
const CreateTaskReducer=(state=initTask, action)=>{
    switch(action.type){
        case "ADD_TASK_SUCCESS":
            return {...initTask, ...action.payload}
            default:
                return initTask
    }
}

export default CreateTaskReducer