import MarkDonetypes from "../Types/MarkDoneType";

const markdone = (data) => (dispatch) => {
  dispatch({ type: MarkDonetypes.MARK_DONE, payload: data });
};
export default markdone;
