import axios from "axios";
import {
  setAllCard,
  setMyCard,
  setRemoveItems,
  setLoadingCard,
  setError,
} from "../Reducers/CardReducers";

const basePath =  "http://localhost:8080";

export const createAddTOCard = (info) => async (dispatch, getState) => {
  dispatch(setLoadingCard(true));

  try {
    const { data } = await axios.post(`${basePath}/cart`, info, {
      headers: {
        authorization: `${localStorage.getItem("token")} `,
        headers: { "content-type": "application/json" },
      },
    });
    console.log(data, "==");
    dispatch(setMyCard(data));
  } catch (err) {
    console.log(err, "Error");
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoadingCard(false));
  }
};

export const getUserAllCard = (userId) => async (dispatch, getState) => {
  dispatch(setLoadingCard(true));

  try {
    const { data } = await axios.get(`${basePath}/cart`, {
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("token")} `,
      },
    });
    console.log();
    dispatch(setAllCard(data));
  } catch (err) {
    console.log(err, "Error");
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoadingCard(false));
  }
};

export const removeItem = (itemId) => async (dispatch, getState) => {
  dispatch(setLoadingCard(true));

  try {
    const res = await axios.delete(`${basePath}/cart/` + itemId, {
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("token")} `,
      },
    });
    dispatch(setRemoveItems(itemId));
  } catch (err) {
    console.log(err.response.data);
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoadingCard(false));
  }
};

export const updateItem = (info, item) => async (dispatch, getState) => {
  dispatch(setLoadingCard(true));
  try {
    const { data } = await axios.patch(
      `${basePath}/cart/` + item.id,
      { ...info },
      {
        headers: {
          "content-type": "application/json",
          authorization: `${localStorage.getItem("token")} `,
        },
      }
    );
    dispatch(setAllCard(data));
  } catch (err) {
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoadingCard(false));
  }
};

export const removeAllCard = (userId) => async (dispatch, getState) => {
  dispatch(setLoadingCard(true));

  try {
    const { data } = await axios.delete(`${basePath}/cart/all/:` + userId, {
      headers: {
        "content-type": "application/json",
        authorization: `${localStorage.getItem("token")} `,
      },
    });
  } catch (err) {
    console.log(err, "delete all  card");
    dispatch(setError(err.message));
  } finally {
    dispatch(setLoadingCard(false));
  }
};
