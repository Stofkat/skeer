import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productAdd, productEdit, productRemove } from "redux/slices/productsSlice";

import ProductItem from "components/ProductItem";
import EmptyState from "components/EmptyState";
import ButtonAdd from "components/ButtonAdd";

import ModalAddProduct from "components/ModalAddProduct";
import ModalConfirm from "components/ModalConfirm";

import "./style.scss";

const PageProducts = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const [addProduct, setAddProduct] = useState(false);
  const [editProduct, setEditProduct] = useState(false);

  const [removeProduct, setRemoveProduct] = useState(false);

  const keys = Object.keys(products);

  const onAddProduct = (name) => {
    dispatch(productAdd(name));
    setAddProduct(false);
  };


  const onRemoveProduct = () => {
    dispatch(productRemove(removeProduct));
    setRemoveProduct(false);
  };

  const onEditProduct = (friendId) => {
    dispatch(productEdit(friendId));
  };


  return (
    <div className="page-products">
      <div className="scroll-list">
        {keys.map(key => {
          return (
            <ProductItem
              product={products[key]}
              onRemove={(id) => setRemoveProduct(id)}
              onEdit={(id) => setEditProduct(id)}
              key={key}
            />
          );
        })}
      </div>
      {keys.length === 0 &&
        <EmptyState
          icon={require("assets/icons/products.svg").default}
          text="Voeg hier producten toe om te zien of ze in de aanbieding zijn"
        />
      }
      <ButtonAdd onClick={() => setAddProduct(true)} />
      {addProduct &&
        <ModalAddProduct
          onConfirm={(name) => {
            if (addProduct) {
              onAddProduct(name);
            } else if (editProduct) {
              onEditProduct(name);
            }
          }}
          onCancel={() => {
            setAddProduct(false);
            setEditProduct(false);
          }}
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