import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { dealsLoad } from "redux/actions/dealsLoad";
import DealItem from "components/DealItem";

import "./style.scss";

const PageStores = () => {

  const { deals } = useSelector(state => state.deals);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(dealsLoad());
  }, [dispatch]);

  return (
    <div className="page-deals">
      <h2 className="title">Aanbiedingen</h2>
      <div className="scroll-list">
        {Object.keys(deals).map((key) => {
          const deal = deals[key];
          return (<DealItem deal={deal} key={deal.name} />);
        })}
      </div>
    </div>

  );
}

export default PageStores;