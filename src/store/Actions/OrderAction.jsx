import axios from "axios";
import { setOrder, setAllOrder, setLoading, setError } from "../Reducers/OrderSlice";

const baseUrl = "http://localhost:8080";

export const AycSetOrder = (data) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading state to true
    const res = await axios.post(
      `${baseUrl}/orders`,
      { ...data },
      {
        headers: {
          authorization: `${localStorage.getItem("token")} `,
          "content-type": "application/json", // Fix headers
        },
      }
    );
    dispatch(setOrder(res.data));
  } catch (err) {
    dispatch(setError(err.message)); // Set error state
  } finally {
    dispatch(setLoading(false)); // Set loading state to false
  }
};

export const AycGetAllOrder = () => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading state to true
    const res = await axios.get(`${baseUrl}/orders`, {
      headers: {
        authorization: `${localStorage.getItem("token")} `,
        "content-type": "application/json", // Fix headers
      },
    });
    dispatch(setAllOrder(res.data));
  } catch (err) {
    dispatch(setError(err.message)); // Set error state
  } finally {
    dispatch(setLoading(false)); // Set loading state to false
  }
};
