import GetTasktypes from "../Types/GetTaskType";

const getTask = (data) => (dispatch) => {
  const Tasks = [];
  dispatch({ type: GetTasktypes.GET_TASK_SUCCESS, payload: Tasks });
};
export default getTask;
