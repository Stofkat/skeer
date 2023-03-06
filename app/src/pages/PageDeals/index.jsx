import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { dealsLoad } from "redux/actions/dealsLoad";
import DealItem from "components/DealItem";
import Header from "components/Header";
import Loader from "components/Loader";

import "./style.scss";
import EmptyState from "components/EmptyState";


const PageStores = () => {

  const { deals, loading } = useSelector(state => state.deals);
  const { products } = useSelector(state => state.products);
  const { stores } = useSelector(state => state.stores);

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(dealsLoad());
  }, [dispatch]);


  const dealKeys = Object.keys(deals);
  const hasProducts = Object.keys(products).length > 0;
  const hasStores = Object.keys(stores).length > 0;


  const renderInstructions = () => {
    return (
      <EmptyState
        icon={require("assets/icons/deals.svg").default}
        text="Voeg eerst winkels en producten toe om aanbiedingen te zien"
      />
    )
  };

  const renderContent = () => {
    return (
      <>
        {loading ? <Loader /> :
            dealKeys.length > 0 ?
              <div className="scroll-list">
                {dealKeys.map((key) => {
                  const deal = deals[key];
                  return (<DealItem deal={deal} key={deal.name} />);
                })}
              </div> :
              <EmptyState
                icon={require("assets/icons/deals.svg").default}
                text="Helaas, geen aanbiedingen gevonden :("
              />
          }
        
      </>

    );
  };



  return (
    <div className="page-deals">
      <Header title="Aanbiedingen" />
      {!hasProducts || !hasStores ?
        renderInstructions() :
        renderContent()
      }
    </div>

  );
}

export default PageStores;