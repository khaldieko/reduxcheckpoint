const inittasks = { tasks: [] };
const CreateTaskReducer = (state = inittasks, action) => {
  switch (action.type) {
    case "ADD_TASK_SUCCESS":
      return { ...state, tasks: [...state.tasks, action.payload.task] };
    case "EDIT_TASK_SUCCESS":
      const initTask = state.tasks[action.payload.task.index];

      const data = { ...initTask, task: action.payload.task.new };
      state.tasks.splice(action.payload.task.index, 1, data);
      return { ...state, tasks: state.tasks };
    case "MARK_DONE":
      const done = {
        ...state.tasks[action.payload.task.index],
        done: action.payload.task.done,
      };
      state.tasks.splice(action.payload.task.index, 1, done);
      return { ...state, tasks: state.tasks };
    default:
      return state;
  }
};

export default CreateTaskReducer;
