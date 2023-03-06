import { createSlice } from "@reduxjs/toolkit";

const placeholderId = new Date().getTime();
const initialState = {
  products: { [placeholderId]: { id: placeholderId, name: "" } },
  loading: false,
  empty: true,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productAdd: (state, { payload: name }) => {
      const id = new Date().getTime();
      state.products[id] = { id, name };
      state.empty = false;
    },
    productEdit: (state, { payload }) => {
      const { id, name } = payload;
      state.products[id] = { id, name };
      state.empty = false;
    },
    productRemove: (state, { payload: index }) => {
      delete state.products[index]
      if (Object.keys(state.products).length === 0) {
        const id = new Date().getTime();
        state.products[id] = { id, name: "" };
        state.empty = true;
      }
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