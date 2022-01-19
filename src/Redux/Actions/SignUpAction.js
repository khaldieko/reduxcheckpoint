import Axios from "axios";
import baseUrl from "../../utils/baseurl";
import { types } from "../Types/SignUpTypes";

export const register = (username, password) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST });
  try {
    console.log(username, password);
    const { data } = await Axios.post(`${baseUrl}/api/v1/auth/signup`, {
      username,
      password,
    });
   
    dispatch({ type: types.REGISTER_SUCCESS, payload: data });

    localStorage.setItem("userToken", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.REGISTER_FAIL,
      payload: error.message,
    });
  }
};
