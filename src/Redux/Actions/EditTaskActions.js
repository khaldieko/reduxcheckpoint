import EditTasktypes from "../Types/EditTask";

const EditTask = (data) => (dispatch) => {
  dispatch({ type: EditTasktypes.EDIT_TASK_SUCCESS, payload: data });
};
export default EditTask;
