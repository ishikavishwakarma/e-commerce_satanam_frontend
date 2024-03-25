import axios from "axios";
import {
  setUser,
  setLoginUser,
  setError,
  getAllUser,
  // setUserInfo,
  setIscheckUser,
  setSendEmil,
  // setAllUser,
  // SetUserProfileError,
  setLoading,
} from "../Reducers/AuthSlice"; // Assuming these actions are correctly imported from userSlice

const basePath = "http://localhost:8080";

export const createUser = (userInfo) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading state
    const { data } = await axios.post(
      `${basePath}/auth/signup`,
      { ...userInfo },
      { headers: { "content-type": "application/json" } }
    );
    console.log(data, "===");
    localStorage.setItem("token", data.token);
    dispatch(setUser(data.user));
  } catch (err) {
console.log(err)    
    console.error("Error creating user:", err);
    dispatch(setError(err.response?.data.message || "creatUser error"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const loginUser = (info) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const { data } = await axios.post(
      `${basePath}/auth/login`,
      { ...info },
      { headers: { "content-type": "application/json" } }
    );
    localStorage.setItem("token", data.token);
    dispatch(setLoginUser(data.user));
  } catch (err) {
    console.error("Error logging in:", err);
    dispatch(setError(err.response?.data.message || "logging error"));
  } finally {
    dispatch(setLoading(false));
  }
};
export const getAllUsers = () => async (dispatch, getState) => {
  try {
  const { data } = await axios.get(
    `${basePath}/auth/alluser`,
    { headers: { "content-type": "application/json" } }
  );
  dispatch(getAllUser(data))
  // console.log(data.users);
  
} catch (error) {
  console.log(error, "no data is there");
}
};

export const getUserInfo = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    const token = localStorage.getItem('token');
    if (!token) {
      // Handle case where token is missing
      dispatch(setError('No token found'));
      return;
    }

    const response = await axios.get(`${basePath}/auth/userInfo`, {
      headers: { Authorization: ` ${token}` },
    });

    // Dispatch action to set the details of the logged-in user
    dispatch(setUser(response.data.user));
  } catch (error) {
    console.error('Error fetching user details:', error);
    dispatch(setError(error.response?.data.message || 'Error fetching user details'));
  } finally {
    dispatch(setLoading(false));
  }
};

// export const getUserInfo = () => async (dispatch, getState) => {
//   if (!localStorage.getItem("token")) {
//     console.log("no token");
//     dispatch(setLoading(false));
//     return;
//   }
//   try {
//     const res = await axios.get(`${basePath}/auth/userInfo`, {
//       headers: { authorization: `${localStorage.getItem("token")} ` },
//     });
//     dispatch(setUser(res.data.user));
//     dispatch(setIscheckUser());
//   } catch (err) {
//     dispatch(setIscheckUser());
//     console.log(err, "jwt");
//     dispatch(setError(err?.response?.data.message || "Jwt Error"));
//   } finally {
//     dispatch(setLoading(false)); // Clear loading state
//   }
// };

export const logoutAyc = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${basePath}/auth/logout`, {
      headers: {
        "content-type": "application/json",
        authorization: ` ${localStorage.getItem("token")}`,
      },
    });
    localStorage.removeItem("token");
    dispatch(setUser(""));
  } catch (err) {
    console.log(err, "Logout failed");
  }
};

export const sendMail = (data) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading state
    const res = await axios.post(
      `${basePath}/auth/reset-password-request`,
      { ...data },
      {
        headers: {
          "content-type": "application/json",
          authorization: `${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(setSendEmil(true));
  } catch (err) {
    dispatch(setSendEmil(false));
    dispatch(setError(err.response?.data?.message || "Error sending email"));
  } finally {
    dispatch(setLoading(false)); // Clear loading state
  }
};

export const resetPassword = (info) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true)); // Set loading state
    const { data } = await axios.post(
      `${basePath}/auth/reset-password`,
      { ...info },
      {
        headers: {
          "content-type": "application/json",
          authorization: ` ${localStorage.getItem("token")}`,
        },
      }
    );

    dispatch(setUser(data.user));
    console.log(data.user, "Password reset successful");
  } catch (err) {
    console.error("Error resetting password:", err);
    dispatch(
      setError(err.response?.data?.message || "Error resetting password")
    );
  } finally {
    dispatch(setLoading(false)); // Clear loading state
  }
};
/*auth complete*/

/* user */
export const updateProfile = (data) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.post(
      `${basePath}/users/ProfileUpdate`,
      { ...data },
      {
        headers: {
          "content-type": "application/json",
          authorization: ` ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(setUser(res.data));
  } catch (err) {
    dispatch(setError(err.response?.data?.msg || "Error updating profile"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const userAddressUpdate = (address) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.patch(
      `${basePath}/users`,
      { ...address },
      {
        headers: {
          "content-type": "application/json",
          authorization: ` ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(setUser(res.data));
  } catch (err) {
    console.error("Error updating address:", err);
    dispatch(setError(err.response?.data?.message || "Error updating address"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const uploadImage = (data) => async (dispatch, getState) => {
  console.log(data, "====");
  try {
    dispatch(setLoading(true));
    const res = await axios.post(`${basePath}/users/avatar`, data, {
      headers: {
        authorization: `  ${localStorage.getItem("token")}`,
      },
    });
    console.log(res, "Image upload successful");
  } catch (err) {
    console.error("Error uploading image:", err);
    dispatch(setError(err.response?.data?.message || "Error uploading image"));
  } finally {
    dispatch(setLoading(false));
  }
};

export const removeAddress = (address) => async (dispatch, getState) => {
  try {
    dispatch(setLoading(true));
    const res = await axios.patch(
      `${basePath}/users/removeAddress`,
      { ...address },
      {
        headers: {
          "content-type": "application/json",
          authorization: ` ${localStorage.getItem("token")}`,
        },
      }
    );
    dispatch(setUser(res.data));
  } catch (err) {
    console.error("Error removing address:", err);
    dispatch(setError(err.response?.data?.message || "Error removing address"));
  } finally {
    dispatch(setLoading(false));
  }
};
