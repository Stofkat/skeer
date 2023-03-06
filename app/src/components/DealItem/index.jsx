import React from "react";

import "./style.scss";

const DealItem = ({ deal }) => {

  const { name, description, img, price, url, store } = deal;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="deal-item"
    >
      <div className="deal-image">
        {img ?
          <img className="image-product-placeholder" alt="product" src={img} /> :
          <img
            className="image-product"
            alt="product"
            src={require("assets/icons/products.svg").default}
          />
        }
      </div>
      <div className="content">
        <span className="name">
          {name}
        </span>
        <span className="description">
          {description}
        </span>
      </div>
      <div className="content-end">
        <div className="price">
          {`€ ${price}`}
        </div>
        <div className="store">
          <img className="store-icon" src={`/img/${store}.png`} alt="store icon" />
        </div>
      </div>
    </a>
  );
}

export default DealItem;