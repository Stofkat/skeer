import { API_URL } from "constants/urls";
import { storesLoaded, storesLoading } from "redux/slices/storesSlice";
import apiCall from "helpers/apiCall";

export const storesLoad = () =>async (dispatch) => {

    dispatch(storesLoading());
    const data = await apiCall(`${API_URL}/stores`, "GET");

    const mappedStores = {};
    data.forEach(store => mappedStores[store.name] = store);

    dispatch(storesLoaded(mappedStores));
  };