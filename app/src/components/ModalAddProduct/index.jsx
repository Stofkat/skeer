import React, { useState } from "react";

import Button from "components/Button";
import InputText from "components/InputText";

import "./style.scss";

const ModalAddProduct = ({
  onConfirm,
  onCancel,
  defaultValue
}) => {

  const [productName, setProductName] = useState(defaultValue);


  return (
    <div className="modal-background">
      <div className="popup">
        <h3>Product toevoegen</h3>
        <p>Voeg een product toe om deze te controleren op aanbiedingen</p>
        <div className="spacer" />
        <InputText
          label="Product naam (bvb kaas of heinz tomatenketchup "
          name="product"
          defaultValue={defaultValue}
          onChange={({target}) => setProductName(target.value)}
        />
        <div className="spacer" />

        <div className="cols">
          <div className="col">
            <Button
              onClick={onCancel}
              secondary
              label="Cancel"
            />
          </div>
          <div className="col">
            <Button
              onClick={onConfirm(productName)}
              label="Add"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAddProduct;