import { createSlice } from "@reduxjs/toolkit";

export const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    products: [],
    totalItems: 0,
    categories: [],
    brands: [],
    searchText: "",
    product: null,
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.data.allProducts;
      state.totalItems = action.payload.data.totalItems;
      state.loading = false;
      state.error = null;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
      state.error = null;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
      state.loading = false;
      state.error = null;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
      state.loading = false;
      state.error = null;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  setProducts,
  setCategories,
  setBrands,
  setProduct,
  setSearchText,
  setLoading,
  setError,
} = ProductSlice.actions;
export default ProductSlice.reducer;
