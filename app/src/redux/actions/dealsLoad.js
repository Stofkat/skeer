import { API_URL } from "constants/urls";
import { dealsLoaded, dealsLoading } from "redux/slices/dealsSlice";
import apiCall from "helpers/apiCall";

export const dealsLoad = () =>
  async (dispatch, getState) => {

    dispatch(dealsLoading());

    const { products } = getState().products;
    const { selected } = getState().stores;

    const stores = Object.keys(selected);
    const productsKeys = Object.keys(products);
    const productNames =  productsKeys.map((key)=> {
      return products[key].name;
    })

    const data = await apiCall(`${API_URL}/deals`, "POST", {
      stores,
      products: productNames
    });

    const mappedDeals = {};
    data.forEach(deal => {
      mappedDeals[deal.name + deal.store] = deal;
    });

    dispatch(dealsLoaded(mappedDeals));
  };