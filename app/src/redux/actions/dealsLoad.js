import doRequest from "helpers/doRequest";
import { API_URL } from "constants/urls";
import { dealsLoaded, dealsLoading } from "redux/slices/dealsSlice";

export const cardsLoad = () =>
  async (dispatch, getState) => {
    
    dispatch(dealsLoading());

    const { products } = getState().products;
    const { selected : stores } = getState().stores;

    const data = await doRequest(`${API_URL}/deals`, "POST", {
      stores,
      products
    });

    const mappedDeals = {};
    data.forEach(deal => {
      mappedDeals[deal.id] = deal;
    });

    dispatch(dealsLoaded(mappedDeals));
  };