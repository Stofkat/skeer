import React from "react";
import { TextField } from "@material-ui/core";

import { productEdit, productRemove } from "redux/slices/productsSlice";
import { useDispatch } from "react-redux";


import "./style.scss";


const ProductItem = ({ product, onRemove }) => {

  const { name, id } = product;
  const dispatch = useDispatch();

  const onEditProduct = (newValue) => {
    dispatch(productEdit({ name: newValue, id }));
  };

  const onRemoveProduct = () => {
    dispatch(productRemove(id));
  };
  

  return (
    <div className="product-item" >
      <img alt="product" src={require("assets/icons/products.svg").default} />
      <div className="content">
        <span className="name">
          <TextField
            placeholder="Productnaam (bijv. pindakaas)"
            fullWidth
            defaultValue={name}
            type="text"
            autoFocus={name.length === 0}
            onChange={({ target }) => onEditProduct(target.value)}
          />
        </span>
        <div className="container-end">
          <span className="actions">
            <span onClick={onRemoveProduct} className="button-delete">
              -
            </span>

            {/* <DotMenu
              menuItems={[
                { label: "Aanpassen", action: () => { onEdit(id) } },
                { label: "Verwijderen", action: () => onRemove(id) },
              ]} /> */}

          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;