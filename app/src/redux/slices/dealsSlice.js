import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deals: {},
  loading: false
};

export const dealsSlice = createSlice({
  name: "deals",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    dealsLoading: (state) => {
      state.loading = true;
    },
    dealsLoaded: (state, { payload }) => {
      state.deals = payload;
      state.loading = false;
    }
  }
});

export const {
  dealsLoading,
  dealsLoaded,
} = dealsSlice.actions;


export default dealsSlice.reducer;