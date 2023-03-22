import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import StoreItem from "components/StoreItem";
import { storesLoad } from "redux/actions/storesLoad";

import Button from "components/Button";
import "./style.scss";


const PageStores = () => {

  const history = useHistory();
  const { stores } = useSelector(state => state.stores);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(storesLoad());
  }, [dispatch]);

  return (
    <div className="page-stores">
      <div className="explanation">
        <h2>Winkels bij jou in de buurt</h2>
        <p>Selecteer hier de winkels waar je wel eens boodschappen doet en dus de aanbiedingen van wilt zien.</p>
      </div>
      <div className="scroll-list">
        <div className="scroll-list-inner">
          {Object.keys(stores).map((key) => {
            const store = stores[key];
            return (<StoreItem store={store} key={store.name} />);
          })}

        </div>
      </div>
      <div className="container-buttons">
        <Button
          label="Volgende"
          onClick={() => { history.push("/products") }}
        />
      </div>
    </div>

  );
}

export default PageStores;