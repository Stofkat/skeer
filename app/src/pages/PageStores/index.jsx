import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import StoreItem from "components/StoreItem";
import { storesLoad } from "redux/actions/storesLoad";

import "./style.scss";

const PageStores = () => {

  const { stores } = useSelector(state => state.stores);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(storesLoad());
  }, []);

  return (
    <div className="page-stores">
      <h2 className="title">Winkels</h2>
      <div className="container-types">
        {Object.keys(stores).map((key) => {
          const store = stores[key];
          return (
            <StoreItem
              store={store}
              key={store.name}
            />
          );
        })}
      </div>
    </div>

  );
}

export default PageStores;