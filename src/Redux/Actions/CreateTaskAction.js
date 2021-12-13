import AddTasktypes from "../Types/AddTaskType";

const CreateTask = (data) => (dispatch) => {
  dispatch({ type: AddTasktypes.ADD_TASK_SUCCESS, payload: data });
};
export default CreateTask;
