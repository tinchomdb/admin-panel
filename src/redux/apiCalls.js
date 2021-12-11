import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "./requestMethods";
import {
  getProductStart,
  getProductSuccess,
  getProductFailure,
} from "./productRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await userRequest.delete(`/products/${id}`);
  } catch (err) {
    console.log("error: ", err);
  }
};

export const addProduct = async (product) => {
  try {
    const res = await userRequest.post("/products", { product });
  } catch (err) {}
};
