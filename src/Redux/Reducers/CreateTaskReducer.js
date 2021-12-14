const inittasks = {tasks:[]};
const CreateTaskReducer = (state = inittasks, action) => {
  switch (action.type) {
    case "ADD_TASK_SUCCESS":
       
      return {...state, tasks: [...state.tasks, action.payload.task]};
      case "EDIT_TASK_SUCCESS":
        
        state.tasks.splice(action.payload.index, 1, action.payload.task) 
        return {...state, tasks:state.tasks}
    default:
      return state;
  }
};

export default CreateTaskReducer;
