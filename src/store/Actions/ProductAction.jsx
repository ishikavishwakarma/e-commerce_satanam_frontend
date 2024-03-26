import axios from "axios";
import {
  setProduct,
  setCategories,
  setBrands,
  setProducts,
  setError,
  setLoading,
} from "../Reducers/ProductSlice";

const baseUrl = "http://localhost:8080";

export const getAllProducts = () => async (dispatch, getState) => {
  dispatch(setLoading()); // Set loading state to true
  try {
    const { data } = await axios.get(
      `${baseUrl}/products?`,
      {
        headers: {
          authorization: ` ${localStorage.getItem("token")} `,
          "content-type": "application/json",
        },
      }
    );
    dispatch(setProduct(data));
  } catch (err) {
    dispatch(setError(err.message));
  }
};
export const getFilterProduct = (filter, sort, pagination, searchText) => async (dispatch, getState) => {
    let queryStr = "";


    for (let key in filter) {
      const categoryValues = filter[key];
      if (categoryValues.length > 0) {
        categoryValues.forEach((value) => {
          queryStr += `${key}=${value}&`;
        });
      }
    }

    for (let key in sort) {
      queryStr += `${key}=${sort[key]}&`;
    }
    for (let key in pagination) {
      queryStr += `${key}=${pagination[key]}&`;
    }

    if (searchText) {
      queryStr += `search=${searchText}&`;
    }

    try {
      const res = await axios.get(`${baseUrl}/products?` + queryStr);
      const totalItems = await res.headers.get("X-Total-Count");
      dispatch(setProducts({ data: { allProducts: res.data, totalItems } }));
    } catch (err) {
      console.error("Error fetching filtered products:", err);
      dispatch(setError(err.message || "Failed to fetch filtered products"));
    }
  };
export const getAllCategories = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${baseUrl}/categories`);
    dispatch(setCategories(res.data.msg));
  } catch (err) {
    console.error("Error fetching categories:", err);
    dispatch(setError(err.message || "Failed to fetch categories"));
  }
};
export const allFilteredProducts = (filters ={}) => async (dispatch) => {
  console.log(filters)
  try {
      dispatch(setLoading());
      const res  = await axios.post(`${baseUrl}/products/filter/product`, filters);
      // console.log(res.data)
      const totalItems = await res.headers.get("X-Total-Count");
      dispatch(setProducts({ data: { allProducts: res.data , totalItems } }));
  } catch (error) {
    console.error("Error fetching filtered products:", error);
      dispatch(setError(error.message || "Failed to fetch filtered products"));
  }
};
export const getAllBrands = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${baseUrl}/brands`);
    dispatch(setBrands(res.data.msg));
  } catch (err) {
    console.error("Error fetching brands:", err);
    dispatch(setError(err.message || "Failed to fetch brands"));
  }
};

export const getSelectedProduct = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(`${baseUrl}/products/${id}`);
    dispatch(setProduct(res.data));
  } catch (err) {
    console.error("Error fetching selected product:", err);
    dispatch(setError(err.message || "Failed to fetch selected product"));
  }
};
