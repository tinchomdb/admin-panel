import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "./requestMethods";

export const login = async (dispatch, user) => {
  /* console.log(
    "currentUser: ",
    JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
      .currentUser.accessToken
  ); */

  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
