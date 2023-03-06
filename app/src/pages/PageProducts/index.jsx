import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productAdd, productEdit, productRemove } from "redux/slices/productsSlice";

import ProductItem from "components/ProductItem";
import EmptyState from "components/EmptyState";

import ModalAddProduct from "components/ModalAddProduct";
import ModalConfirm from "components/ModalConfirm";

import "./style.scss";
import Header from "components/Header";
import ButtonAnchorAdd from "components/ButtonAnchorAdd";

const PageProducts = () => {

  const dispatch = useDispatch();
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
      <Header title="Producten" />
      <div className="scroll-list">
        <div className="scroll-list-inner">
        <h2>Producten in de watch-list</h2>
        <p>Voeg hier producten toe waarvan je aanbiedingen in de gaten wilt houden</p>
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
    </div>
  );
};

export default PageProducts;