import React from "react";

import "./style.scss";

const ButtonAnchorAdd = ({ label, onClick }) => {
    return (
        <div className="button-anchor-add" onClick={onClick}>
            <span>+ {label}</span>
        </div>
    );
}

export default ButtonAnchorAdd;