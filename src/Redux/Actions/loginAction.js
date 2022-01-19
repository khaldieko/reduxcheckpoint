import Axios from "axios";
import baseUrl from "../../utils/baseurl";
import { types } from "../Types/logintypes";

export const login = (username, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  try {
    console.log(username, password);
    const { data } = await Axios.post(`${baseUrl}/api/v1/auth/login`, {
      username,
      password,
    });

    dispatch({ type: types.LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userToken", JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.LOGIN_FAIL,
      payload: error.message,
    });
  }
};
