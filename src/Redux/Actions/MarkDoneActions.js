import {MARK_DONE} from "../Types/MarkDoneType";

const markdone = (data) => (dispatch) => {
  dispatch({ type: MARK_DONE, payload: data });
};
export default markdone;
