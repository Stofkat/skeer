import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import StoreItem from "components/StoreItem";
import { storesLoad } from "redux/actions/storesLoad";

import "./style.scss";
import Button from "components/Button";

const PageStores = () => {

  const { stores } = useSelector(state => state.stores);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(storesLoad());
  }, [dispatch]);

  return (
    <div className="page-stores">
      <div className="scroll-list">
        <div className="scroll-list-inner">
          <h2>Winkels bij jou in de buurt</h2>
          <p>Selecteer hier de winkels waar je wel eens boodschappen doet en dus de aanbiedingen van wilt zien.</p>
          {Object.keys(stores).map((key) => {
            const store = stores[key];
            return (<StoreItem store={store} key={store.name} />);
          })}
                  <Button label="Volgende"/>
        </div>

      </div>
    </div>

  );
}

export default PageStores;