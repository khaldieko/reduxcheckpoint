const inittasks = {tasks:[]};
const CreateTaskReducer = (state = inittasks, action) => {
  switch (action.type) {
    case "ADD_TASK_SUCCESS":
        console.log(action)
      return {...state, tasks: [...state.tasks, action.payload.task]};
    default:
      return state;
  }
};

export default CreateTaskReducer;
