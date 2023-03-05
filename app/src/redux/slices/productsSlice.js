import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: {},
  loading: false
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productAdd: (state, { payload: name }) => {
      const id = new Date().getTime();
      state.products[id] = { id, name };
    },
    productEdit: (state, { payload }) => {
      const { id, name } = payload;
      state.products[id] = { id, name };
    },
    productRemove: (state, { payload: index }) => {
      delete state.products[index]
      state.loading = false;
    }
  }
});

export const {
  productAdd,
  productRemove,
  productEdit
} = productsSlice.actions;


export default productsSlice.reducer;