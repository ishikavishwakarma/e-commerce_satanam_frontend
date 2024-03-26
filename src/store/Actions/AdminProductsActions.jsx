import axios from "axios";

import {
  setProduct,
  setCategories,
  setBrands,
  setProducts,
  updateOrderStatus,
  setOrderProducts,
  setProductById,
  setError,
  setLoading,
  removeProduct,
  createProducts
} from "../Reducers/AdminProductSlice";
const basePath = "http://localhost:8080";
/* need to fixed id */
export const getAllProducts = () => async (dispatch, getState) => {
  dispatch(setLoading()); // Set loading state to true
  try {
    const { data } = await axios.get(
      `${basePath}/products?`,
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
    const res = await axios.get(`${basePath}/products?` + queryStr);
    const totalItems = await res.headers.get("X-Total-Count");
    dispatch(setProducts({ data: { allProducts: res.data, totalItems } }));
  } catch (err) {
    console.error("Error fetching filtered products:", err);
    dispatch(setError(err.message || "Failed to fetch filtered products"));
  }
};

// setCategories
export const getAllCategories = () => async (dispatch, getState) => {
  dispatch(setLoading());
  try {
    const {data} = await axios.get(
      `${basePath}/categories`,
      {
        headers: {
          authorization: `${localStorage.getItem("token")} `,
          "content-type": "application/json",
        },
      }
    );
    dispatch(setCategories(data.msg));
  } catch (err) {
    dispatch(setError(err.message));
  }
};


// getAllBrands
export const getAllBrands = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${basePath}/brands`
    );
    dispatch(setBrands(res.data));
  } catch (err) {
    console.log(err, "Error");
  }
};

export const getSelectedProduct = (id) => async (dispatch, getState) => {
  try {
    const res = await axios.get(
      `${basePath}/products/` + id
    );

    dispatch(setProduct(res.data));
  } catch (err) {
    console.log(err, "Error");
  }
};

export const deleteProduct = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.delete(
      `${basePath}/products/` + id,
      {
        headers: {
          authorization: ` ${localStorage.getItem("token")} `,
          "content-type": "application/json",
        },
      }
    );
    dispatch(removeProduct(id))
    console.log(data);
  } catch (err) {
    console.log(err, "Error");
  }
};

export const createProduct = (data) => async (dispatch, getState) => {
  try {
    const product = await axios.post(
      `${basePath}/products`,
      { ...data },
      {
        headers: {
          authorization: `${localStorage.getItem("token")} `,
          "content-type": "application/json",
        },
      }
    );
    dispatch(createProducts(product.data))
    alert("product created");
    console.log(product.data, "new");
  } catch (err) {
    alert("product created Error");

    console.log(err, "Error");
  }
};
export const getSingleProduct = (productId) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `${basePath}/products/` + productId
    );
    dispatch(setProductById(data));
  } catch (err) {
    console.log(err, "Error");
  }
};

export const updateProduct = (productDetails) => async (dispatch, getState) => {
const id = localStorage.getItem("id")
if(id){

  try {
    const { data } = await axios.patch(
      `${basePath}/products/` +
        id,
      { ...productDetails },
      {
        headers: {
          authorization: `${localStorage.getItem("token")} `,
          "content-type": "application/json",
        },
      }
    );
    // console.log(data);
  } catch (err) {
    console.log(err, "Error");
  }
}else{
  console.log("id not found");
}
};

/*get all order to admin  */
export const getAllOrder =
  (filter, sort, pagination) => async (dispatch, getState) => {
    let queryStr = "";

    for (let key in filter) {
      const categoryValue = filter[key];
      if (categoryValue.length > 0) {
        const lastCategoryValue = categoryValue[categoryValue.length - 1];
        queryStr += `${key}=${lastCategoryValue}&`;
      }
    }

    for (let key in pagination) {
      queryStr += `${key}=${pagination[key]}&`;
    }

    for (let key in sort) {
      queryStr += `${key}=${sort[key]}&`;
    }

    try {
      const res = await axios.get(
        `${basePath}/admin?` + queryStr
      );
      const totalItems = await res.headers.get("X-Total-Count");
      dispatch(setOrderProducts({ data: res.data, totalItems: totalItems }));
    } catch (err) {
      console.log(err, "Error");
    }
  };

export const EditOrder = (id, status) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch(
      `${basePath}/admin/` + id,
      { status: status },
      {
        headers: { "content-type": "application/json" },
      }
    );
    dispatch(updateOrderStatus(data));
  } catch (err) {
    console.log(err, "Error");
  }
};
export const allFilteredProducts = (filters ={}) => async (dispatch) => {
  console.log(filters)
  try {
      dispatch(setLoading());
      const res  = await axios.post(`${basePath}/products/filter/product`, filters);
      console.log(res.data)
      const totalItems = await res.headers.get("X-Total-Count");
      dispatch(setProducts({ data: { allProducts: res.data , totalItems } }));
  } catch (error) {
    console.error("Error fetching filtered products:", error);
      dispatch(setError(error.message || "Failed to fetch filtered products"));
  }
};
