import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { productAdd, productRemove } from "redux/slices/productsSlice";

import ProductItem from "components/ProductItem";
import EmptyState from "components/EmptyState";
import ModalConfirm from "components/ModalConfirm";
import ButtonAnchorAdd from "components/ButtonAnchorAdd";
import Button from "components/Button";

import "./style.scss";

const PageProducts = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const { products } = useSelector(state => state.products);

  const [removeProduct, setRemoveProduct] = useState(false);

  const keys = Object.keys(products);

  const onAddProduct = () => {
    dispatch(productAdd(""));
  };


  const onRemoveProduct = () => {
    dispatch(productRemove(removeProduct));
    setRemoveProduct(false);
  };

  return (
    <div className="page-products">
      <div className="explanation">
        <h2>Producten in de watch-list</h2>
        <p>Voeg hier producten toe waarvan je aanbiedingen in de gaten wilt houden.
          Let op: we zoeken exact dus 'kaas' heeft bijvoorbeeld andere resultaten dan 'kazen'.
          We zijn dit aan het verbeteren!
        </p>
      </div>
      <div className="scroll-list">
        <div className="scroll-list-inner">

          {keys.map(key => {
            return (
              <ProductItem
                product={products[key]}
                onRemove={(id) => setRemoveProduct(id)}
                key={key}
              />
            );
          })}
          <ButtonAnchorAdd
            label="Nog een product toevoegen"
            onClick={onAddProduct}
          />
        </div>
      </div>
      {keys.length === 0 &&
        <EmptyState
          icon={require("assets/icons/products.svg").default}
          text="Voeg hier producten toe om te zien of ze in de aanbieding zijn"
        />
      }
      {removeProduct &&
        <ModalConfirm
          title="Product verwijderen"
          message="Weet je deze dat je dit product uit je lijst wilt verwijderen?"
          onConfirm={onRemoveProduct}
          onCancel={() => setRemoveProduct(false)}
        />
      }
      <div className="container-buttons">
        <Button
          secondary
          label="Vorige"
          onClick={() => { history.push("/stores") }}
        />
        <Button label="Volgende" onClick={() => { history.push("/deals") }}
        />
      </div>
    </div>
  );
};

export default PageProducts;