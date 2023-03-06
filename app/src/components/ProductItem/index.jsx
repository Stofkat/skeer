import DotMenu from "components/DotMenu";
import React from "react";

import "./style.scss";

const ProductItem = ({ product, onRemove, onEdit }) => {

  const { name, id } = product;

  return (
    <div className="product-item" >
      <div className="product-image">
        <img alt="product" src={require("assets/icons/products.svg").default} />
      </div>
      <div className="content">
        <span className="name">
          {name}
        </span>
        <div className="container-end">
          <span className="actions">
            <DotMenu
              menuItems={[
                { label: "Aanpassen", action: () => { onEdit(id) } },
                { label: "Verwijderen", action: () => onRemove(id) },
              ]} />

          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;