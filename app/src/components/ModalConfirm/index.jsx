import React from "react";

import Button from "components/Button";

import "./style.scss";

const ModalConfirm = ({
  title,
  message,
  onConfirm,
  onCancel
}) => {
  return (
    <div className="modal-background">
      <div className="popup">
        <h3>{title}</h3>
        <p>{message}</p>
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
              onClick={onConfirm}
              label="Confirm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirm;