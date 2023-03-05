import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stores: {},
  selected: {},
  loading: false
};

export const storesSlice = createSlice({
  name: "stores",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    storesLoading: (state) => {
      state.loading = true;
    },
    storesLoaded: (state, { payload }) => {
      state.stores = payload;
      state.loading = false;
    },
    storeSelected: (state, { payload: name }) => {
      state.selected[name] = name;
    },
    storeDeselected: (state, { payload: name }) => {
      delete state.selected[name];
    }    
  }
});

export const {
  storesLoading,
  storesLoaded,
  storeSelected,
  storeDeselected
} = storesSlice.actions;


export default storesSlice.reducer;