import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orderSlice",
  initialState: {
    orders: [],
    currentOrder: null,
    loading: false,
    error: null,
  },
  reducers: {
    setOrder: (state, action) => {
      state.orders.push(action.payload);
      state.currentOrder = action.payload;
    },
    setAllOrder: (state, action) => {
      state.orders = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setOrder, setAllOrder, setLoading, setError } = orderSlice.actions;
export default orderSlice.reducer;
