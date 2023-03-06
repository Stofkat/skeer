import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import StoreItem from "components/StoreItem";
import { storesLoad } from "redux/actions/storesLoad";

import "./style.scss";
import Header from "components/Header";

const PageStores = () => {

  const { stores } = useSelector(state => state.stores);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(storesLoad());
  }, [dispatch]);

  return (
    <div className="page-stores">
      <Header title="Winkels" />
      <div className="scroll-list">
        <div className="scroll-list-inner">
          <h2>Winkels bij jou in de buurt</h2>
          {Object.keys(stores).map((key) => {
            const store = stores[key];
            return (<StoreItem store={store} key={store.name} />);
          })}
        </div>
      </div>
    </div>

  );
}

export default PageStores;